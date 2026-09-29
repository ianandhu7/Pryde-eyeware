import { chromium } from "@playwright/test";
import { mkdir,writeFile } from "node:fs/promises";
import assert from "node:assert/strict";
const base=process.env.PREVIEW_URL||"http://127.0.0.1:3000";
const routes=["/","/about","/collections","/collections/optical","/collections/sunglasses","/where-to-buy","/contact"];
const report={base,routes:[],widths:[],errors:[],links:[],assets:[],menu:false};
await mkdir("artifacts",{recursive:true});
const browser=await chromium.launch({headless:true});
const context=await browser.newContext();
const page=await context.newPage();
page.on("pageerror",error=>report.errors.push(error.message));
const links=new Set();const assets=new Set();const titles=new Set();const descriptions=new Set();
try{
 for(const width of [375,768,1440,1920]){
  await page.setViewportSize({width,height:1000});
  for(const route of routes){
   const response=await page.goto(base+route,{waitUntil:"networkidle"});
   assert.equal(response.status(),200,route+" status");
   await page.locator("img").evaluateAll(async images=>{await Promise.all(images.map(image=>{image.loading="eager";return image.decode().catch(()=>{});}));});
   assert.equal(await page.locator("h1").count(),1,route+" H1");
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false,route+" overflow at "+width);
   const broken=await page.locator("img").evaluateAll(images=>images.filter(image=>!image.complete||image.naturalWidth===0).map(image=>image.src));
   assert.deepEqual(broken,[],route+" broken images");
   assert.equal(await page.locator("img:not([alt])").count(),0);
   if(width===375){
    const title=await page.title();assert.ok(title.includes("PRYDE"));assert.ok(!titles.has(title),"duplicate title");titles.add(title);
    const description=await page.locator('meta[name="description"]').getAttribute("content");assert.ok(description);assert.ok(!descriptions.has(description));descriptions.add(description);
    assert.match(await page.locator('meta[name="robots"]').getAttribute("content"),/noindex/);
    assert.equal(await page.locator('link[rel="canonical"]').count(),0,"No invented domain");
    assert.ok(await page.locator('meta[property="og:title"]').count());
    assert.ok(await page.locator('meta[name="twitter:card"]').count());
    const structured=JSON.parse(await page.locator('script[type="application/ld+json"]').textContent());assert.equal(structured["@graph"][0].name,"PRYDE");
    const html=await response.text();assert.ok(html.includes("<h1"),"H1 server rendered");assert.ok(!/<(?:meta|link)[^>]+(?:localhost|127\\.0\\.0\\.1)/.test(html),"No local metadata URLs");
    for(const href of await page.locator("a[href]").evaluateAll(a=>a.map(x=>x.getAttribute("href")))){if(href.startsWith("/")&&!href.startsWith("//"))links.add(href);}
    for(const src of await page.locator("img").evaluateAll(images=>images.map(image=>{const src=new URL(image.currentSrc);return src.pathname==="/_next/image"?src.searchParams.get("url"):src.pathname;})))assets.add(src);
    report.routes.push({route,title,status:response.status(),h1:1,noindex:true});
   }
   if(route==="/"||width===375)await page.screenshot({path:"artifacts/"+(route==="/"?"home":route.slice(1).replaceAll("/","-"))+"-"+width+".png",fullPage:true});
  }
  report.widths.push({width,pagesChecked:routes.length,overflow:false});
 }
 for(const href of links){const response=await context.request.get(base+href);assert.equal(response.status(),200,href);report.links.push(href);}
 for(const src of assets){const response=await context.request.get(base+src);assert.equal(response.status(),200,src);report.assets.push(src);}
 const robots=await (await context.request.get(base+"/robots.txt")).text();assert.ok(robots.includes("Disallow: /"));
 const sitemap=await (await context.request.get(base+"/sitemap.xml")).text();assert.ok(!sitemap.includes("<loc>"));
 const missing=await context.request.get(base+"/not-a-real-page");assert.equal(missing.status(),404);
 await page.setViewportSize({width:375,height:812});await page.goto(base);
 const toggle=page.locator('button[aria-controls="mobile-navigation"]');await toggle.focus();await page.keyboard.press("Enter");assert.equal(await toggle.getAttribute("aria-expanded"),"true");
 const nav=page.getByRole("navigation",{name:"Mobile navigation"});assert.ok(await nav.isVisible());await page.keyboard.press("Tab");assert.equal(await page.evaluate(()=>document.activeElement?.textContent),"Home");
 await page.keyboard.press("Escape");assert.equal(await toggle.getAttribute("aria-expanded"),"false");assert.ok(await toggle.evaluate(el=>el===document.activeElement));
 await toggle.click();await nav.getByRole("link",{name:"About PRYDE"}).click();await page.waitForURL("**/about");assert.equal(await page.getByRole("button",{name:/Menu/}).getAttribute("aria-expanded"),"false");
 await page.getByRole("button",{name:/Menu/}).click();await page.getByRole("button",{name:/Close/}).click();assert.ok(!await nav.isVisible());
 await page.emulateMedia({reducedMotion:"reduce"});assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),"auto");
 report.menu=true;assert.deepEqual(report.errors,[]);
 console.log(JSON.stringify(report,null,2));
}finally{await writeFile("artifacts/browser-report.json",JSON.stringify(report,null,2));await browser.close();}

import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import ts from "typescript";
function evaluate(path,env={},mocks={}) {
 const code=ts.transpileModule(readFileSync(path,"utf8"),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2020}}).outputText;
 const compiledModule={exports:{}};
 new Function("require","module","exports","process",code)(name=>{assert.ok(name in mocks,"Unexpected import "+name);return mocks[name];},compiledModule,compiledModule.exports,{env});
 return compiledModule.exports;
}
const actual=evaluate("src/content/site.ts");
function scenario(env,content=actual){
 const meta=evaluate("src/lib/metadata.ts",env,{"@/content/site":content});
 const mocks={"@/lib/metadata":meta,"@/content/site":content};
 return {meta,robots:evaluate("src/app/robots.ts",env,mocks).default(),sitemap:evaluate("src/app/sitemap.ts",env,mocks).default()};
}
const preview=scenario({});
assert.equal(preview.meta.siteUrl,undefined);
assert.equal(preview.meta.pageMetadata("/").alternates,undefined);
assert.equal(preview.meta.pageMetadata("/").robots.index,false);
assert.equal(preview.robots.rules.disallow,"/");
assert.deepEqual(preview.sitemap,[]);
const origin="https://brand.example"; // Reserved test fixture, never site configuration.
const production={SITE_URL:origin,DEPLOYMENT_ENV:"production",ENABLE_INDEXING:"true"};
const draft=scenario(production);
assert.equal(draft.meta.pageMetadata("/about").robots.index,false);
assert.deepEqual(draft.sitemap,[]);
const content={...actual,pages:actual.pages.map(page=>({...page,approved:page.path==="/"}))};
const approved=scenario(production,content);
assert.equal(approved.meta.pageMetadata("/").robots.index,true);
assert.equal(approved.meta.pageMetadata("/about").robots.index,false);
assert.equal(approved.meta.pageMetadata("/").alternates.canonical,origin+"/");
assert.equal(approved.meta.pageMetadata("/about").alternates.canonical,origin+"/about");
assert.equal(approved.meta.pageMetadata("/").title.absolute,"Own your perspective | PRYDE");
assert.equal(approved.robots.sitemap,origin+"/sitemap.xml");
assert.deepEqual(approved.sitemap,[{url:origin+"/"}]);
assert.equal(scenario({...production,VERCEL_ENV:"preview"},content).meta.indexingEnabled,false);
assert.equal(scenario({...production,DEPLOYMENT_ENV:"preview"},content).meta.indexingEnabled,false);
assert.equal(scenario({...production,ENABLE_INDEXING:"false"},content).meta.indexingEnabled,false);
for(const url of ["http://brand.example","https://localhost","https://127.0.0.1","https://brand.example/path","https://brand.example?query=yes","https://user:pass@brand.example"])assert.throws(()=>scenario({SITE_URL:url}));
console.log("PASS: canonical origin, unique title suffix, preview gates, draft exclusion, approved sitemap, robots, invalid origin rejection.");

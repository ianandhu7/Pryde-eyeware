import { site } from "@/content/site";
import { siteUrl } from "@/lib/metadata";
export function JsonLd() {
 const data = {"@context":"https://schema.org","@graph":[{"@type":"Organization",name:site.name,...(siteUrl?{url:siteUrl.toString()}:{}),...(siteUrl&&site.logo?{logo:new URL(site.logo.src,siteUrl).toString()}:{}),...(site.email?{email:site.email}:{})},{"@type":"WebSite",name:site.name,...(siteUrl?{url:siteUrl.toString()}:{}),inLanguage:"en"}]};
 return <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(data).replace(/</g,"\\u003c")}} />;
}

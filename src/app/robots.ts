import type { MetadataRoute } from "next";
import { indexingEnabled,siteUrl } from "@/lib/metadata";
export default function robots():MetadataRoute.Robots{return {rules:{userAgent:"*",...(indexingEnabled?{allow:"/"}:{disallow:"/"})},...(indexingEnabled&&siteUrl?{sitemap:new URL("/sitemap.xml",siteUrl).toString()}:{})};}

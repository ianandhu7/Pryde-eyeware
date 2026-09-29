import type { MetadataRoute } from "next";
import { pages } from "@/content/site";
import { indexingEnabled,siteUrl } from "@/lib/metadata";
export default function sitemap():MetadataRoute.Sitemap{return indexingEnabled&&siteUrl?pages.filter(page=>page.approved).map(page=>({url:new URL(page.path,siteUrl).toString()})):[];}

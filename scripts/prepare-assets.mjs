import sharp from "sharp";
import { mkdir } from "node:fs/promises";
const root="C:/Users/anand/.codex/generated_images/01a0d741-6aba-7521-a241-85e4d833e2ec/";
const images=[
 ["exec-9f12dec7-c8e3-494b-8275-d6184c31d512.png","public/images/hero/editorial-placeholder.webp"],
 ["exec-73e54847-3f06-41bd-94e8-e4636b226f27.png","public/images/collections/optical-placeholder.webp"],
 ["exec-ae6282b2-26d4-4f7f-a3f8-92e112bdcd29.png","public/images/collections/sunglasses-placeholder.webp"],
];
for(const [src,dest] of images){await mkdir(dest.slice(0,dest.lastIndexOf("/")),{recursive:true});await sharp(root+src).resize({width:1536,withoutEnlargement:true}).webp({quality:85}).toFile(dest);console.log(dest);}

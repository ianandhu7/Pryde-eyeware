"use client";
import { useEffect,useRef,useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { site } from "@/content/site";
import styles from "./MobileNavigation.module.css";
export function MobileNavigation(){
 const [open,setOpen]=useState(false); const trigger=useRef<HTMLButtonElement>(null);const panel=useRef<HTMLElement>(null);const path=usePathname();
 useEffect(()=>{if(!open)return;const escape=(event:KeyboardEvent)=>{if(event.key==="Escape"){setOpen(false);trigger.current?.focus();}};const outside=(event:PointerEvent)=>{if(!panel.current?.contains(event.target as Node)&&!trigger.current?.contains(event.target as Node))setOpen(false);};const media=matchMedia("(min-width: 761px)");const resize=()=>{if(media.matches)setOpen(false);};document.addEventListener("keydown",escape);document.addEventListener("pointerdown",outside);media.addEventListener("change",resize);return()=>{document.removeEventListener("keydown",escape);document.removeEventListener("pointerdown",outside);media.removeEventListener("change",resize);};},[open]);
 return <div className={styles.mobile}><button ref={trigger} aria-expanded={open} aria-controls="mobile-navigation" onClick={()=>setOpen(!open)} className={styles.toggle}>{open?"Close":"Menu"}<span aria-hidden="true">{open?"×":"☰"}</span></button><nav ref={panel} id="mobile-navigation" aria-label="Mobile navigation" hidden={!open} className={styles.panel}><Link href="/" aria-current={path==="/"?"page":undefined} onClick={()=>setOpen(false)}>Home</Link>{site.navigation.map(item=><Link key={item.href} href={item.href} aria-current={path===item.href?"page":undefined} onClick={()=>setOpen(false)}>{item.label}<span aria-hidden="true">↗</span></Link>)}</nav></div>;
}

import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Button.module.css";
export function Button({href,children,light=false}:{href:string;children:ReactNode;light?:boolean}){return <Link href={href} className={light?styles.light:styles.button}>{children}<span aria-hidden="true">↗</span></Link>;}

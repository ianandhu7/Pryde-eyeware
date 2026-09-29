import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import styles from "./CollectionCard.module.css";
export function CollectionCard({collection}:{collection:Collection}){return <article className={styles.card}><Link href={"/collections/"+collection.slug} className={styles.link}><div className={styles.image}><Image src={collection.image} alt={collection.alt} fill sizes="(max-width: 600px) 100vw, 50vw"/></div><div className={styles.heading}><h3>{collection.name}</h3><span aria-hidden="true">↗</span></div><span className={styles.explore}>Explore {collection.name}</span></Link></article>;}

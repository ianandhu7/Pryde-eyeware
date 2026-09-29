import { stockists } from "@/content/stockists";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { pageMetadata } from "@/lib/metadata";
import styles from "./Stockists.module.css";
export const metadata=pageMetadata("/where-to-buy");
export default function WhereToBuy(){const copy=site.stockists;return <Container><div className="page-intro"><SectionHeading h1 eyebrow={copy.eyebrow} title={copy.title} description={copy.intro}/></div>{stockists.length?<div className={styles.grid}>{stockists.map(store=><article key={store.name+store.address}><p className="eyebrow">{store.city} / {store.country}</p><h2>{store.name}</h2><address>{store.address}</address>{store.website&&<a className="text-link" href={store.website} target="_blank" rel="noopener noreferrer">Visit stockist website<span className={styles.note}> (opens in a new tab)</span></a>}</article>)}</div>:<section className="empty-state"><h2>{copy.emptyTitle}</h2><p>{copy.emptyText}</p><Button href="/contact">Contact information</Button></section>}</Container>;}

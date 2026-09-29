import { collections } from "@/content/collections";
import { CollectionCard } from "./CollectionCard";
import styles from "./CollectionGrid.module.css";
export function CollectionGrid(){return <div className={styles.grid}>{collections.map(collection=><CollectionCard key={collection.slug} collection={collection}/>)}</div>;}

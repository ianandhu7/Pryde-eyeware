import styles from "./SectionHeading.module.css";
export function SectionHeading({eyebrow,title,description,h1=false}:{eyebrow:string;title:string;description?:string;h1?:boolean}){const Heading=h1?"h1":"h2";return <div className={styles.heading}><p className="eyebrow">{eyebrow}</p><Heading>{title}</Heading>{description&&<p className={styles.description}>{description}</p>}</div>;}

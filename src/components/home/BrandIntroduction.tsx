import Link from "next/link";
import styles from "./BrandIntroduction.module.css";

export function BrandIntroduction() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topRow}>
          <span className={styles.eyebrow}>OUR PHILOSOPHY</span>
          <span className={styles.chapter}>ATELIER N°01</span>
        </div>

        <h2 className={styles.quote}>
          “Eyewear is not merely an accessory — it is the architectural lens through which you declare your perspective to the world.”
        </h2>

        <div className={styles.bottomRow}>
          <div className={styles.metaCol}>
            <span className={styles.metaLabel}>CRAFTED IN</span>
            <span className={styles.metaVal}>Sabae, Fukui & Cadore</span>
          </div>

          <div className={styles.textCol}>
            <p className={styles.desc}>
              Each PRYDE silhouette is sculpted from proprietary high-density bio-acetate block and fitted with custom 7-barrel hinges. Made in limited quantities for those who appreciate quiet confidence and uncompromised optical clarity.
            </p>
            <Link href="/about" className={styles.link}>
              DISCOVER OUR CRAFT & MANIFESTO <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}


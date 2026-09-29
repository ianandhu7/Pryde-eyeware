"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./CategorySection.module.css";

const categories = [
  {
    href: "/collections/optical",
    title: "Optical",
    sub: "Explore frames for your everyday expression.",
    cta: "EXPLORE OPTICAL",
    image: "/images/hero/hero-tortoiseshell-glasses.webp",
    alt: "PRYDE tortoiseshell optical glasses resting on travertine stone pedestal.",
  },
  {
    href: "/collections/sunglasses",
    title: "Sunglasses",
    sub: "Discover a different shade of you.",
    cta: "EXPLORE SUNGLASSES",
    image: "/images/hero/hero-6-amber-lens.webp",
    alt: "PRYDE amber lens sunglasses editorial campaign photograph.",
  },
];

export function CategorySection() {
  return (
    <section className={styles.section} aria-labelledby="category-heading">
      <div className={styles.container}>
        {/* Header Block */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>EXPLORE PRYDE</span>
          <h2 id="category-heading" className={styles.heading}>
            Find your point of view.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className={styles.grid}>
          {categories.map((cat) => (
            <div key={cat.href} className={styles.card}>
              <Link href={cat.href} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={cat.image}
                    alt={cat.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={styles.img}
                  />
                </div>
              </Link>

              <div className={styles.meta}>
                <h3 className={styles.cardTitle}>{cat.title}</h3>
                <p className={styles.cardSub}>{cat.sub}</p>
                <Link href={cat.href} className={styles.link}>
                  <span>{cat.cta}</span>
                  <span className={styles.arrow} aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}





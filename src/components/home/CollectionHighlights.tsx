"use client";

import { useState } from "react";
import Link from "next/link";
import { getPublishedProducts, type Product } from "@/content/products";
import { ProductCard } from "@/components/ui/ProductCard";
import { QuickViewModal } from "@/components/ui/QuickViewModal";
import styles from "./CollectionHighlights.module.css";

export function CollectionHighlights() {
  const [filter, setFilter] = useState<"all" | "optical" | "sunglasses">("all");
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const all = getPublishedProducts();
  const optical = getPublishedProducts("optical");
  const sunglasses = getPublishedProducts("sunglasses");

  const filtered =
    filter === "optical" ? optical
      : filter === "sunglasses" ? sunglasses
        : all;

  return (
    <section className={styles.section} id="collection-highlights">

      {/* Header row */}
      <div className={styles.header}>
        <div>
          <span className={styles.eyebrow}>SIGNATURE EDIT</span>
          <h2 className={styles.title}>The Frame Collection</h2>
        </div>
        <div className={styles.headerRight}>
          {/* Filter pills */}
          <div className={styles.filterBar}>
            <button
              onClick={() => setFilter("all")}
              className={`${styles.filterBtn} ${filter === "all" ? styles.activeFilter : ""}`}
            >
              ALL
            </button>
            <button
              onClick={() => setFilter("optical")}
              className={`${styles.filterBtn} ${filter === "optical" ? styles.activeFilter : ""}`}
            >
              OPTICAL
            </button>
            <button
              onClick={() => setFilter("sunglasses")}
              className={`${styles.filterBtn} ${filter === "sunglasses" ? styles.activeFilter : ""}`}
            >
              SUNGLASSES
            </button>
          </div>
          <Link href="/collections" className={styles.viewAll}>
            View all frames ↗
          </Link>
        </div>
      </div>

      {/* Product grid with angle change hover & quick view */}
      <div className={styles.grid}>
        {filtered.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            onQuickView={(p) => setQuickViewProduct(p)}
          />
        ))}
      </div>

      {/* Quick View Interactive Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

    </section>
  );
}


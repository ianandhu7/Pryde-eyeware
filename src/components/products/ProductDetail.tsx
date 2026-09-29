"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import { Lightbox } from "@/components/ui/Lightbox";
import styles from "./ProductDetail.module.css";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const images = product.images;
  const currentImage = images[activeImageIndex] || images[0];

  const handleNextLightbox = useCallback(() => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const handlePrevLightbox = useCallback(() => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const handleKeyDownThumbnails = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown" || e.key === "ArrowRight") {
      e.preventDefault();
      setActiveImageIndex((prev) => (prev + 1) % images.length);
    } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
      e.preventDefault();
      setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  const displayName = product.colorway
    ? `${product.name} — ${product.colorway}`
    : product.name;

  return (
    <article className={styles.productPage} aria-labelledby="product-title">
      {/* Breadcrumb Navigation */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span className={styles.separator}>/</span>
        <Link href={`/collections/${product.category}`}>
          {product.category.toUpperCase()}
        </Link>
        <span className={styles.separator}>/</span>
        <span className={styles.currentBreadcrumb}>{product.name}</span>
      </nav>

      <div className={styles.container}>
        {/* Gallery Column (Left ~60%) */}
        <section className={styles.gallerySection} aria-label="Product image gallery">
          {/* Vertical Thumbnail Strip */}
          <div
            className={styles.thumbnailStrip}
            role="tablist"
            aria-label="Image angles"
            tabIndex={0}
            onKeyDown={handleKeyDownThumbnails}
          >
            {images.map((img, idx) => {
              const isActive = idx === activeImageIndex;
              return (
                <button
                  key={img.src}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`${styles.thumbnailBtn} ${isActive ? styles.thumbnailActive : ""}`}
                  onClick={() => setActiveImageIndex(idx)}
                >
                  <div className={styles.thumbnailWrap}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="80px"
                      className={styles.thumbnailImg}
                    />
                  </div>
                  <span className={styles.thumbBadge}>
                    {img.angle || `View ${idx + 1}`}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Main Large Image Stage */}
          <div className={styles.mainStage}>
            <button
              type="button"
              className={styles.mainImageBtn}
              onClick={() => setLightboxOpen(true)}
              aria-label={`Enlarge photo: ${currentImage.alt}`}
            >
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
              <div className={styles.mainImageWrap}>
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className={styles.mainImg}
                />
              </div>
              <span className={styles.zoomHint}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
                Click to expand view
              </span>
            </button>

            {/* Current Angle Label below photo */}
            {currentImage.angle && (
              <div className={styles.angleLabel}>
                ANGLE: {currentImage.angle.toUpperCase()}
              </div>
            )}

            {/* Gallery Note if photo angles are pending */}
            {product.galleryNote && (
              <p className={styles.galleryNote}>ℹ️ {product.galleryNote}</p>
            )}
          </div>
        </section>

        {/* Product Information Column (Right ~40%) */}
        <section className={styles.infoSection} aria-label="Product specifications and details">
          <div className={styles.categoryTag}>{product.category.toUpperCase()}</div>
          <h1 id="product-title" className={styles.title}>
            {product.name}
          </h1>

          {product.colorway && (
            <div className={styles.colorwayRow}>
              <span className={styles.metaLabel}>COLORWAY:</span>
              <span className={styles.metaValue}>{product.colorway}</span>
            </div>
          )}

          <p className={styles.description}>{product.description}</p>

          {/* Technical Specifications */}
          {product.specs && product.specs.length > 0 && (
            <div className={styles.specsContainer}>
              <h2 className={styles.specsHeader}>SPECIFICATIONS</h2>
              <dl className={styles.specsList}>
                {product.specs.map((spec) => (
                  <div key={spec.label} className={styles.specRow}>
                    <dt className={styles.specLabel}>{spec.label}</dt>
                    <dd className={styles.specValue}>{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}

          {/* Call to Action — Informational / Fitting Request */}
          <div className={styles.actions}>
            <Link
              href={`/contact?enquiry=${encodeURIComponent(displayName)}`}
              className={styles.enquireBtn}
            >
              ENQUIRE ABOUT THIS FRAME
            </Link>
            <Link href="/where-to-buy" className={styles.findStoreBtn}>
              FIND AUTHORIZED OPTICIAN
            </Link>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={(newIdx: number) => setActiveImageIndex(newIdx)}
        />
      )}
    </article>
  );
}

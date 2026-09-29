"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import styles from "./QuickViewModal.module.css";

interface QuickViewModalProps {
  product: Product | null;
  onClose: () => void;
}

export function QuickViewModal({ product, onClose }: QuickViewModalProps) {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  useEffect(() => {
    setSelectedImageIdx(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const currentImg = product.images[selectedImageIdx] || product.images[0];

  return (
    <div className={styles.backdrop} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close product quick view"
        >
          ✕
        </button>

        <div className={styles.grid}>
          {/* Visual Showcase */}
          <div className={styles.imageCol}>
            <div className={styles.mainImageWrap}>
              {product.badge && <span className={styles.badge}>{product.badge}</span>}
              <Image
                src={currentImg.src}
                alt={currentImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.mainImg}
                priority
              />
            </div>

            {/* Gallery Thumbnails (Front & Angled views) */}
            {product.images.length > 1 && (
              <div className={styles.thumbRow}>
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImageIdx(idx)}
                    className={`${styles.thumbBtn} ${selectedImageIdx === idx ? styles.activeThumb : ""}`}
                    aria-label={`View angle ${idx + 1}`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="80px"
                      className={styles.thumbImg}
                    />
                    <span className={styles.thumbLabel}>
                      {idx === 0 ? "Front Angle" : "Side 3/4 Angle"}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className={styles.infoCol}>
            <span className={styles.category}>{product.category.toUpperCase()} COLLECTION</span>
            <h3 className={styles.title}>
              {product.name} {product.colorway ? `— ${product.colorway}` : ""}
            </h3>
            <p className={styles.price}>{product.price}</p>

            <div className={styles.divider} />

            <p className={styles.description}>{product.description}</p>

            {/* Frame Specifications */}
            <div className={styles.specsList}>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Material</span>
                <span className={styles.specVal}>
                  {product.category === "optical" ? "Japanese High-Density Acetate / Beta-Titanium" : "Custom Bio-Acetate & ZEISS CR-39"}
                </span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Lens Fitting</span>
                <span className={styles.specVal}>
                  {product.category === "optical" ? "Custom Prescription / Blue Light Ready" : "100% UVA/UVB Category 3 / Polarised"}
                </span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Hardware</span>
                <span className={styles.specVal}>Custom 5-Barrel Precision Hinges</span>
              </div>
              <div className={styles.specItem}>
                <span className={styles.specLabel}>Dimensions</span>
                <span className={styles.specVal}>51 □ 19 - 145 mm (Standard Unisex Fit)</span>
              </div>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
              <Link
                href={`/contact?enquiry=${encodeURIComponent(product.name + (product.colorway ? ` (${product.colorway})` : ''))}`}
                className={styles.primaryAction}
                onClick={onClose}
              >
                REQUEST ATELIER APPOINTMENT →
              </Link>
              <Link
                href={`/collections/${product.category}`}
                className={styles.secondaryAction}
                onClick={onClose}
              >
                VIEW FULL {product.category.toUpperCase()} CATALOGUE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

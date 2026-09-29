"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import styles from "./Lightbox.module.css";

interface LightboxImage {
  src: string;
  alt: string;
  angle?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({
  images,
  activeIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const total = images.length;
  const current = images[activeIndex] || images[0];

  const handleNext = useCallback(() => {
    onNavigate((activeIndex + 1) % total);
  }, [activeIndex, total, onNavigate]);

  const handlePrev = useCallback(() => {
    onNavigate((activeIndex - 1 + total) % total);
  }, [activeIndex, total, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handleNext, handlePrev]);

  return (
    <div
      className={styles.backdrop}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Enlarged image lightbox"
    >
      <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          type="button"
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close enlarged view"
        >
          ✕
        </button>

        {/* Counter & Angle Badge */}
        <div className={styles.topInfo}>
          {current.angle && (
            <span className={styles.angleTag}>{current.angle}</span>
          )}
          <span className={styles.counter}>
            {activeIndex + 1} / {total}
          </span>
        </div>

        {/* Previous Button */}
        {total > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={handlePrev}
            aria-label="Previous photo angle"
          >
            ‹
          </button>
        )}

        {/* Image Container */}
        <div className={styles.imageContainer}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            sizes="90vw"
            priority
            className={styles.img}
          />
        </div>

        {/* Next Button */}
        {total > 1 && (
          <button
            type="button"
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={handleNext}
            aria-label="Next photo angle"
          >
            ›
          </button>
        )}

        {/* Caption */}
        <p className={styles.caption}>{current.alt}</p>
      </div>
    </div>
  );
}

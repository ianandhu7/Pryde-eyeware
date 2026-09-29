"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

const HERO_SLIDES = [
  {
    id: "slide-1",
    image: "/images/hero/hero-couple.webp",
    alt: "A woman wearing PRYDE sunglasses and a man wearing PRYDE optical frames — PRYDE campaign imagery.",
    eyebrow: "AUTUMN / WINTER EDIT",
    heading: "Presence, in every frame.",
    ctaText: "EXPLORE THE COLLECTION",
    ctaLink: "/collections",
  },
  {
    id: "slide-2",
    image: "/images/hero/hero-showroom-interior.webp",
    alt: "Luxurious modern interior of the PRYDE eyewear showroom and flagship store.",
    eyebrow: "THE PRYDE ATELIER",
    heading: "Where craftsmanship meets modern design.",
    ctaText: "FIND AUTHORIZED OPTICIANS",
    ctaLink: "/where-to-buy",
  },
  {
    id: "slide-3",
    image: "/images/hero/hero-3-woman-optical.webp",
    alt: "Woman wearing PRYDE optical eyewear in a refined studio portrait setting.",
    eyebrow: "PRECISION OPTICS",
    heading: "Architectural clarity & refined bio-acetate.",
    ctaText: "DISCOVER OPTICAL COLLECTION",
    ctaLink: "/collections/optical",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Automatic slide transition every 4.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className={styles.hero} aria-label="Campaign hero carousel">
      {/* Photo Stage (Contains image track + nav arrows) */}
      <div className={styles.photoStage}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${(currentSlide * 100) / HERO_SLIDES.length}%)` }}
        >
          {HERO_SLIDES.map((slide, index) => (
            <div key={slide.id} className={styles.slide}>
              <div className={styles.photoWrap}>
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className={styles.img}
                />
                {/* Desktop-only dark gradient overlay */}
                <div className={styles.overlay} />
              </div>

              {/* Desktop-only content overlay */}
              <div className={styles.desktopContent}>
                {slide.eyebrow && (
                  <span className={styles.eyebrow}>{slide.eyebrow}</span>
                )}
                <h1 className={styles.heading}>{slide.heading}</h1>
                <Link href={slide.ctaLink} className={styles.cta}>
                  {slide.ctaText}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrow Controls (Positioned over photograph sides) */}
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prevBtn}`}
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          ‹
        </button>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.nextBtn}`}
          onClick={nextSlide}
          aria-label="Next slide"
        >
          ›
        </button>

        {/* Desktop-only Pagination Dots */}
        <div className={`${styles.pagination} ${styles.desktopPagination}`} role="tablist" aria-label="Hero slides">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                onClick={() => setCurrentSlide(idx)}
              />
            );
          })}
        </div>
      </div>

      {/* Mobile-only Content Panel (< 768px): Separate dark panel below the photograph */}
      <div className={styles.mobilePanel}>
        <div
          className={styles.mobilePanelTrack}
          style={{ transform: `translateX(-${(currentSlide * 100) / HERO_SLIDES.length}%)` }}
        >
          {HERO_SLIDES.map((slide) => (
            <div key={`mob-${slide.id}`} className={styles.mobileSlideContent}>
              {slide.eyebrow && (
                <span className={styles.eyebrow}>{slide.eyebrow}</span>
              )}
              <h1 className={styles.mobileHeading}>{slide.heading}</h1>
              <Link href={slide.ctaLink} className={styles.cta}>
                {slide.ctaText}
              </Link>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Indicators / Dots below CTA */}
        <div className={styles.mobilePagination} role="tablist" aria-label="Hero slides mobile">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <button
                key={`mob-dot-${slide.id}`}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                className={`${styles.dot} ${isActive ? styles.dotActive : ""}`}
                onClick={() => setCurrentSlide(idx)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

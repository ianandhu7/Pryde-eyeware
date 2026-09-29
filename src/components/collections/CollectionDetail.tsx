import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types";
import { getPublishedProducts } from "@/content/products";
import { collectionCopy } from "@/content/collections";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import styles from "./CollectionDetail.module.css";

export function CollectionDetail({ collection }: { collection: Collection }) {
  const items = getPublishedProducts(collection.slug);

  return (
    <>
      <Container>
        <div className="page-intro">
          <Link href="/collections" className="back-link">
            ← All collections
          </Link>
          <SectionHeading
            h1
            eyebrow={collection.eyebrow}
            title={collection.headline}
            description={collection.description}
          />
        </div>

        <section className={styles.gallery} aria-labelledby="gallery-title">
          <div className={styles.heading}>
            <h2 id="gallery-title">{collectionCopy.galleryTitle}</h2>
          </div>

          {items.map((item) => {
            const hero = item.images[0];
            return (
              <figure key={item.id} className={styles.figure}>
                <Link href={`/products/${item.slug}`} className={styles.photo}>
                  <Image
                    src={hero.src}
                    alt={hero.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 70vw"
                  />
                </Link>
                <figcaption>
                  <div className={styles.captionHeader}>
                    <p className="eyebrow">
                      {item.badge ?? item.category.toUpperCase()}
                    </p>
                  </div>
                  <h3>
                    <Link href={`/products/${item.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {item.name} {item.colorway ? `— ${item.colorway}` : ""}
                    </Link>
                  </h3>
                  <p>{item.description}</p>
                  <div className={styles.ctaWrap}>
                    <Link
                      href={`/products/${item.slug}`}
                      className={styles.enquireLink}
                    >
                      View Frame Details →
                    </Link>
                  </div>
                </figcaption>
              </figure>
            );
          })}

          {items.length === 0 && (
            <p style={{ color: "var(--muted)", padding: "40px 0" }}>
              No products in this collection yet. Check back soon.
            </p>
          )}
        </section>

        <section className="cta-row">
          <div>
            <h2>{collectionCopy.enquiryTitle}</h2>
            <p>{collectionCopy.enquiryText}</p>
          </div>
          <Button href={"/contact?collection=" + collection.slug}>
            {collectionCopy.enquiryCta}
          </Button>
        </section>
      </Container>
    </>
  );
}

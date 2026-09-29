import type { Collection } from "@/types";

export const collections: Collection[] = [
  {
    slug: "optical",
    name: "Optical",
    eyebrow: "THE OPTICAL COLLECTION",
    headline: "An everyday point of view.",
    description: "Explore the optical side of PRYDE. A collection space for frames that express your personal style.",
    image: "/images/products/product-1.webp",
    alt: "PRYDE optical frame collection.",
    gallery: [
      {
        src: "/images/products/product-1.webp",
        alt: "VANTA — Deep Ink Black optical frame in Japanese High-Density Acetate.",
        title: "VANTA",
        description: "Architectural rectangular optical frame with bevelled edges and custom wire core. Deep Ink Black.",
        placeholder: false,
      },
      {
        src: "/images/products/product-2.webp",
        alt: "ORBIT — Warm Havana Tortoise round optical frame.",
        title: "ORBIT",
        description: "Sculpted round profile with keyhole bridge and subtle chamfered acetate detailing.",
        placeholder: false,
      },
      {
        src: "/images/products/product-3.webp",
        alt: "FORME — Crystal Champagne slim geometric optical frame.",
        title: "FORME",
        description: "Slim geometric optical frame in crystal acetate with a clean, minimal profile.",
        placeholder: false,
      },
    ],
  },
  {
    slug: "sunglasses",
    name: "Sunglasses",
    eyebrow: "THE SUNGLASSES COLLECTION",
    headline: "Step into your own light.",
    description: "Explore the sunglasses side of PRYDE. A different outlook, with your own sense of style.",
    image: "/images/hero/hero-6-amber-lens.webp",
    alt: "PRYDE amber lens sunglasses collection.",
    gallery: [
      {
        src: "/images/products/product-4.webp",
        alt: "NOIR — Midnight Black rectangular sunglasses with Olive tinted lenses.",
        title: "NOIR",
        description: "Low-profile thick rectangular sunglasses with Category 3 dark olive tinted lenses.",
        placeholder: false,
      },
      {
        src: "/images/products/product-5.webp",
        alt: "SOLACE — Champagne Crystal oversized sunglasses with Smoke Grey lenses.",
        title: "SOLACE",
        description: "Fluid oversizing meets geometric bevels. Fitted with 100% UVA/UVB anti-reflective lenses.",
        placeholder: false,
      },
      {
        src: "/images/products/product-6.webp",
        alt: "AURA — Rich Tortoise sunglasses with Amber Gradient ZEISS lenses.",
        title: "AURA",
        description: "Statement oversized silhouette with gradient amber lenses for maximum UV protection.",
        placeholder: false,
      },
    ],
  },
];

export const collectionCopy = {
  eyebrow: "THE COLLECTIONS",
  title: "Find your frame of mind.",
  intro: "Optical frames and sunglasses. Explore two perspectives on personal style.",
  categoryHeading: "Explore by category",
  galleryTitle: "In the details.",
  galleryNote: "",
  enquiryTitle: "Found your perspective?",
  enquiryText: "Find contact information for questions about this collection.",
  enquiryCta: "Enquire about this collection",
};


/**
 * PRYDE Product Catalogue
 * ─────────────────────────────────────────────────────────────────────────────
 * Single source of truth for all product information on the site.
 */

export type ProductCategory = "optical" | "sunglasses";

export interface ProductImage {
  /** Path from public/ — e.g. "/images/products/vanta/hero.webp" */
  src: string;
  /** Descriptive alt text: frame colour, shape, surface, angle. */
  alt: string;
  /** Viewing angle label (e.g. "Front", "Three-Quarter", "Studio", "Lifestyle", "Detail") */
  angle?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  /** Stable internal identifier. Never change after publishing. */
  id: string;
  /** URL-safe slug. Lowercase, hyphens only. Matches the image folder name. */
  slug: string;
  /** Display name shown on cards and collection pages. */
  name: string;
  /** Colorway / variant name shown in title line (e.g. SMOKE FADE) */
  colorway?: string;
  /** Price display string (e.g. ₹ 8,980.00 INR) */
  price: string;
  /** Controls which collection page this product appears on. */
  category: ProductCategory;
  /** One to two sentences. Keep factual and material-focused. */
  description: string;
  /** Photos — white-background studio shot. */
  images: ProductImage[];
  /** Detailed technical specifications key-value pairs */
  specs?: ProductSpec[];
  /** Informational note if gallery has pending photos */
  galleryNote?: string;
  /** Optional card badge — e.g. "NEW ARRIVAL", "BESTSELLER". */
  badge?: string;
  /** true = visible on site. false = hidden (draft). */
  published: boolean;
  /** Display position within category. Lower = first. Use gaps: 10, 20, 30… */
  order: number;
}

// ─── PRODUCT CATALOGUE ────────────────────────────────────────────────────────

export const products: Product[] = [

  // ── OPTICAL ──────────────────────────────────────────────────────────────

  {
    id: "vanta-01",
    slug: "vanta",
    name: "VANTA",
    colorway: "SMOKE FADE",
    price: "₹ 8,980.00 INR",
    category: "optical",
    description:
      "Architectural rectangular optical frame with bevelled edges and custom wire core, crafted from Japanese high-density acetate.",
    images: [
      {
        src: "/images/products/vanta/hero-white.webp",
        alt: "PRYDE VANTA — deep ink black rectangular optical frame in Japanese acetate, front view on white background.",
      },
    ],
    badge: "NEW ARRIVAL",
    published: true,
    order: 10,
  },

  {
    id: "orbit-01",
    slug: "orbit",
    name: "ORBIT",
    colorway: "HAVANA TORTOISE",
    price: "₹ 8,980.00 INR",
    category: "optical",
    description:
      "Sculpted round profile with keyhole bridge and subtle chamfered detailing, hand-polished in Italian acetate.",
    images: [
      {
        src: "/images/products/orbit/hero-white.webp",
        alt: "PRYDE ORBIT — warm havana tortoise round optical frame with keyhole bridge, front view on white background.",
      },
    ],
    badge: "BESTSELLER",
    published: true,
    order: 20,
  },

  {
    id: "forme-01",
    slug: "forme",
    name: "FORME",
    colorway: "CHAMPAGNE CRYSTAL",
    price: "₹ 8,450.00 INR",
    category: "optical",
    description:
      "Slim geometric optical frame in crystal champagne acetate with a lightweight TR-90 titanium core for all-day comfort.",
    images: [
      {
        src: "/images/products/forme/hero-white.webp",
        alt: "PRYDE FORME — crystal champagne slim rectangular optical frame, front view on white background.",
      },
    ],
    published: true,
    order: 30,
  },

  {
    id: "lumen-01",
    slug: "lumen",
    name: "LUMEN",
    colorway: "TITANIUM SLATE",
    price: "₹ 9,800.00 INR",
    category: "optical",
    description:
      "Ultra-slim titanium optical frame in matte slate grey with featherweight construction for extended daily wear.",
    images: [
      {
        src: "/images/products/lumen/hero-white.webp",
        alt: "PRYDE LUMEN — matte slate grey slim titanium optical frame, front view on white background.",
      },
    ],
    published: true,
    order: 40,
  },

  {
    id: "arc-01",
    slug: "arc",
    name: "ARC",
    colorway: "POLISHED GOLD / CLEAR",
    price: "₹ 9,200.00 INR",
    category: "optical",
    description:
      "A bold geometric bridge and precision-tapered metal temples define this refined architectural optical in stainless steel and crystal acetate.",
    images: [
      {
        src: "/images/products/arc/hero-white.webp",
        alt: "PRYDE ARC — polished gold and clear crystal acetate optical frame with geometric bridge, front view on white background.",
      },
    ],
    badge: "LIMITED EDITION",
    published: true,
    order: 50,
  },

  // ── SUNGLASSES ────────────────────────────────────────────────────────────

  {
    id: "noir-01",
    slug: "noir",
    name: "NOIR",
    colorway: "BLACK / OLIVE",
    price: "₹ 8,980.00 INR",
    category: "sunglasses",
    description:
      "Low-profile thick rectangular sunglasses in midnight black, fitted with Category 3 muted olive tinted lenses in custom 8mm acetate.",
    images: [
      {
        src: "/images/products/noir/hero-white.webp",
        alt: "PRYDE NOIR — midnight black thick rectangular sunglasses with olive tinted lenses, front view on white background.",
      },
    ],
    badge: "CAMPAIGN FEATURE",
    published: true,
    order: 10,
  },

  {
    id: "solace-01",
    slug: "solace",
    name: "SOLACE",
    colorway: "CHAMPAGNE / SMOKE",
    price: "₹ 8,980.00 INR",
    category: "sunglasses",
    description:
      "Fluid oversizing meets geometric bevels in champagne crystal acetate, fitted with 100% UVA/UVB smoke grey anti-reflective lenses.",
    images: [
      {
        src: "/images/products/solace/hero-white.webp",
        alt: "PRYDE SOLACE — champagne crystal oversized sunglasses with smoke grey lenses, front view on white background.",
      },
    ],
    published: true,
    order: 20,
  },

  {
    id: "aura-01",
    slug: "aura",
    name: "AURA",
    colorway: "AMBER TORTOISE",
    price: "₹ 9,450.00 INR",
    category: "sunglasses",
    description:
      "Statement oversized silhouette in rich tortoise bio-acetate, with gradient amber ZEISS lenses for maximum UV protection.",
    images: [
      {
        src: "/images/products/aura/hero-white.webp",
        alt: "PRYDE AURA — rich tortoise oversized sunglasses with amber gradient lenses, front view on white background.",
      },
    ],
    badge: "SIGNATURE",
    published: true,
    order: 30,
  },

  {
    id: "drift-01",
    slug: "drift",
    name: "DRIFT",
    colorway: "EBONY BLUE POLAR",
    price: "₹ 10,200.00 INR",
    category: "sunglasses",
    description:
      "Wraparound-inspired shield silhouette in carbon-reinforced ebony black acetate, with deep blue polarised Category 4 lenses.",
    images: [
      {
        src: "/images/products/drift/hero-white.webp",
        alt: "PRYDE DRIFT — ebony black shield sunglasses with deep blue polarised lenses, front view on white background.",
      },
    ],
    badge: "NEW ARRIVAL",
    published: true,
    order: 40,
  },

  {
    id: "echo-01",
    slug: "echo",
    name: "ECHO",
    colorway: "HONEY AMBER",
    price: "₹ 8,980.00 INR",
    category: "sunglasses",
    description:
      "Retro-influenced round silhouette in warm honey amber Italian bio-acetate, with flattering brown gradient lenses.",
    images: [
      {
        src: "/images/products/echo/hero-white.webp",
        alt: "PRYDE ECHO — honey amber round sunglasses with brown gradient lenses, front view on white background.",
        angle: "Front",
      },
    ],
    specs: [
      { label: "Frame Material", value: "Italian Bio-Acetate" },
      { label: "Lens Tint", value: "Brown Gradient" },
      { label: "UV Protection", value: "100% UVA/UVB" },
      { label: "Frame Shape", value: "Round" },
    ],
    published: true,
    order: 50,
  },

  {
    id: "nora-01",
    slug: "nora",
    name: "NORA",
    colorway: "BLUSH PINK",
    price: "₹ 8,980.00 INR",
    category: "optical",
    description:
      "Femme cat-eye silhouette in translucent blush pink Italian acetate, finished with polished endpiece accents.",
    images: [
      {
        src: "/images/products/nora/hero-white.webp",
        alt: "PRYDE NORA — translucent blush pink cat-eye optical frame, front view on white background.",
        angle: "Front",
      },
    ],
    specs: [
      { label: "Frame Material", value: "Italian Bio-Acetate" },
      { label: "Lens Type", value: "Clear Demo Lens" },
      { label: "Frame Shape", value: "Cat-Eye" },
    ],
    published: true,
    order: 60,
  },

  {
    id: "verde-01",
    slug: "verde",
    name: "VERDE",
    colorway: "OLIVE SMOKE FADE",
    price: "₹ 9,200.00 INR",
    category: "optical",
    description:
      "Subtle gradient square optical frame transitioning from deep olive green to translucent smoke, with integrated flex hinges.",
    images: [
      {
        src: "/images/products/verde/hero-white.webp",
        alt: "PRYDE VERDE — olive green to smoke fade square optical frame, front view on white background.",
        angle: "Front",
      },
    ],
    specs: [
      { label: "Frame Material", value: "High-Density Acetate" },
      { label: "Lens Type", value: "Clear Demo Lens" },
      { label: "Frame Shape", value: "Square" },
    ],
    published: true,
    order: 70,
  },

  {
    id: "noir-opt-01",
    slug: "noir-optical",
    name: "NOIR OPTICAL",
    colorway: "GLOSS BLACK & GOLD",
    price: "₹ 9,450.00 INR",
    category: "optical",
    description:
      "Classic high-gloss black cat-eye optical frame featuring refined 18k gold-plated temple inlay accents.",
    images: [
      {
        src: "/images/products/noir-optical/hero-white.webp",
        alt: "PRYDE NOIR OPTICAL — gloss black cat-eye optical frame with gold temple accents, three-quarter view on white background.",
        angle: "Three-Quarter",
      },
    ],
    specs: [
      { label: "Frame Material", value: "Bio-Acetate & Gold-Plated Inlay" },
      { label: "Lens Type", value: "Clear Demo Lens" },
      { label: "Frame Shape", value: "Cat-Eye" },
    ],
    published: true,
    order: 80,
  },

  {
    id: "forme-black-01",
    slug: "forme-black",
    name: "FORME BLACK",
    colorway: "BLACK & TORTOISE",
    price: "₹ 8,450.00 INR",
    category: "optical",
    description:
      "Structured rectangular optical frame in polished black acetate with Havana tortoise wire-core temples.",
    images: [
      {
        src: "/images/products/forme-black/hero-white.webp",
        alt: "PRYDE FORME BLACK — polished black rectangular optical frame with tortoise wire-core temples, front view on white background.",
        angle: "Front",
      },
    ],
    specs: [
      { label: "Frame Material", value: "Bio-Acetate & Wire Core" },
      { label: "Lens Type", value: "Clear Demo Lens" },
      { label: "Frame Shape", value: "Rectangular" },
    ],
    published: true,
    order: 90,
  },

  {
    id: "pulse-01",
    slug: "pulse",
    name: "PULSE",
    colorway: "MATTE NAVY & RED",
    price: "₹ 9,800.00 INR",
    category: "sunglasses",
    description:
      "Sport-luxe round sunglasses in matte midnight navy bio-acetate with contrast crimson rubberised temple tips and dark grey Category 3 lenses.",
    images: [
      {
        src: "/images/products/pulse/hero-white-v2.webp",
        alt: "PRYDE PULSE — matte navy round sunglasses with crimson rubberised temple tips, three-quarter view on white background.",
        angle: "Three-Quarter",
      },
    ],
    specs: [
      { label: "Frame Material", value: "Matte Bio-Acetate & Crimson Rubber" },
      { label: "Lens Tint", value: "Dark Grey Category 3" },
      { label: "UV Protection", value: "100% UVA/UVB" },
      { label: "Frame Shape", value: "Round" },
    ],
    published: true,
    order: 60,
  },

];

// ─── HELPERS ──────────────────────────────────────────────────────────────────

export function getPublishedProducts(category?: ProductCategory): Product[] {
  return products
    .filter((p) => p.published && (category ? p.category === category : true))
    .sort((a, b) => a.order - b.order);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug && p.published);
}

export function getAllProductSlugs(): string[] {
  return products.filter((p) => p.published).map((p) => p.slug);
}


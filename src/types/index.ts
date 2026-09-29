export type GalleryImage = { src: string; alt: string; title: string; description: string; placeholder: boolean };
export type Collection = { slug: "optical" | "sunglasses"; name: string; eyebrow: string; headline: string; description: string; image: string; alt: string; gallery: GalleryImage[] };
export type Stockist = { name: string; address: string; city: string; country: string; website?: string };

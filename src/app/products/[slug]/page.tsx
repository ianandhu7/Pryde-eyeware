import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProductBySlug, getAllProductSlugs } from "@/content/products";
import { ProductDetail } from "@/components/products/ProductDetail";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllProductSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | PRYDE Eyewear",
    };
  }

  const displayName = product.colorway
    ? `${product.name} (${product.colorway})`
    : product.name;

  return {
    title: `${displayName} | PRYDE Eyewear`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return <ProductDetail product={product} />;
}

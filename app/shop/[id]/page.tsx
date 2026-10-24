import React from "react";
import { notFound } from "next/navigation";
import { PRODUCTS, FEATURED_HERO_PRODUCT } from "@/lib/data";
import ProductDetailClient from "@/components/ProductDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  const all = [...PRODUCTS, FEATURED_HERO_PRODUCT];
  return all.map((product) => ({
    id: product.id
  }));
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const allAvailable = [...PRODUCTS, FEATURED_HERO_PRODUCT];
  const product = allAvailable.find((p) => p.id === id || p.slug === id);

  if (!product) {
    notFound();
  }

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 3);

  return (
    <ProductDetailClient
      product={product}
      relatedProducts={relatedProducts}
    />
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Minus, Plus, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface Props {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: Props) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [activeImage, setActiveImage] = useState(product.image);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-[#f8f6f0] py-10 sm:py-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-8">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6c7265] hover:text-[#222521] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Essentials</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="relative w-full aspect-square bg-[#efece5] rounded-3xl overflow-hidden p-8 flex items-center justify-center shadow-xs">
              {product.badge && (
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3.5 py-1.5 bg-[#2b3327] text-[#f7f5f0] text-[10px] uppercase tracking-widest font-medium rounded-full shadow-xs">
                    {product.badge}
                  </span>
                </div>
              )}
              <div className="relative w-full h-full">
                <Image
                  src={activeImage}
                  alt={product.name}
                  fill
                  priority
                  quality={100}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                />
              </div>
            </div>

            {product.gallery.length > 1 && (
              <div className="flex gap-4 pt-2">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`relative w-20 h-20 rounded-xl overflow-hidden bg-[#efece5] p-2 border-2 transition-all ${
                      activeImage === img
                        ? "border-[#2b3327]"
                        : "border-transparent hover:border-[#ded9ce]"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} angle ${idx + 1}`}
                      fill
                      quality={100}
                      sizes="80px"
                      className="object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:col-span-5 space-y-8 flex flex-col justify-center">
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6d7266]">
                {product.category}
              </span>
              <h1 className="font-outfit font-light text-4xl sm:text-5xl text-[#222521] leading-tight">
                {product.name}
              </h1>
              <div className="flex items-center gap-4 pt-1">
                <div className="text-2xl font-medium text-[#222521]">
                  {product.currency}
                  {product.price.toFixed(2)}
                </div>
                {product.originalPrice && (
                  <span className="text-base text-[#9aa093] line-through">
                    {product.currency}
                    {product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-xs text-[#52574c] bg-[#e6eadf] px-2.5 py-1 rounded-full">
                  In Stock and Ready
                </span>
              </div>
            </div>

            <p className="text-sm text-[#5f6559] leading-relaxed">
              {product.description}
            </p>

            <div className="space-y-4 pt-2 border-t border-[#e8e4da]">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-[#cfc9bc] rounded-full bg-[#f8f6f0] px-3 py-1.5">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    aria-label="Decrease quantity"
                    className="p-1 hover:text-[#1c1e1b] text-[#5c6157]"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="px-4 text-sm font-medium text-[#222521]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    aria-label="Increase quantity"
                    className="p-1 hover:text-[#1c1e1b] text-[#5c6157]"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center gap-3 py-4 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-[0.2em] font-medium rounded-full hover:bg-[#1a2018] transition-all transform active:scale-98 shadow-sm"
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Added to Basket</span>
                    </>
                  ) : (
                    <>
                      <span>Add to Basket</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#e8e4da] text-xs text-[#606659]">
              <div className="flex items-center gap-3">
                <Truck className="w-4 h-4 text-[#485343]" />
                <span>Plastic free carbon neutral shipping available</span>
              </div>
              <div className="flex items-center gap-3">
                <Sparkles className="w-4 h-4 text-[#485343]" />
                <span>Materials: {product.materials}</span>
              </div>
              {product.dimensions && (
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-[#485343]" />
                  <span>Dimensions: {product.dimensions}</span>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-[#e8e4da]">
              <h3 className="text-xs uppercase tracking-widest font-semibold text-[#485343] mb-3">
                Mindful Details
              </h3>
              <ul className="space-y-2 text-xs text-[#636a5c]">
                {product.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#828a78] mt-1.5 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#e8e4da]">
            <h2 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521] mb-8">
              Complete the Ritual
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Plus } from "lucide-react";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div className="group relative flex flex-col">
      <Link
        href={`/shop/${product.id}`}
        className="block relative w-full aspect-[4/5] rounded-[26px] overflow-hidden shadow-xs group bg-[#f5f5f5]"
      >
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-3 py-1 bg-[#2b2a26] text-[#f7f5f0] text-[10px] uppercase tracking-widest font-medium rounded-full shadow-xs">
              {product.badge}
            </span>
          </div>
        )}

        <Image
          src={product.image}
          alt={product.name}
          fill
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <button
          onClick={handleQuickAdd}
          aria-label={`Quick add ${product.name} to cart`}
          className="absolute bottom-3 right-3 z-10 w-9 h-9 rounded-full bg-[#2d352a] text-[#f7f5f0] flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md hover:bg-[#1a2018]"
        >
          {isAdded ? (
            <Check className="w-4 h-4 text-emerald-400" />
          ) : (
            <Plus className="w-4 h-4" />
          )}
        </button>
      </Link>

      <div className="mt-3.5 flex flex-col items-center text-center space-y-1">
        <Link
          href={`/shop/${product.id}`}
          className="font-outfit text-xs text-[#22211e] hover:text-[#525a4c] transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        <div className="flex items-center justify-center gap-2">
          <span className="text-xs text-[#6e6a61] font-light">
            {product.currency}
            {product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-[11px] text-[#9aa093] line-through">
              {product.currency}
              {product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

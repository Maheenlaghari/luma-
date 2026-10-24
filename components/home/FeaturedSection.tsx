"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { FEATURED_HERO_PRODUCT } from "@/lib/data";

export default function FeaturedSection() {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(FEATURED_HERO_PRODUCT, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <section className="w-full min-h-[50vh] lg:h-[50vh] bg-[#f2ede2] py-6 lg:py-8 border-b border-[#dad3c2] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-6 relative flex justify-center">
            <svg
              className="absolute -top-8 -left-6 w-32 h-32 text-[#22211e]/15 pointer-events-none stroke-current fill-none stroke-[1.2]"
              viewBox="0 0 100 100"
            >
              <path d="M 20 80 Q 10 30 50 20 T 90 70" />
            </svg>

            <div className="relative w-56 sm:w-64 lg:w-72 aspect-square rounded-[44%_56%_68%_32%_/_44%_46%_54%_56%] overflow-hidden shadow-md bg-[#e4ded3]">
              <Image
                src="/assets/sec-4.jpe"
                alt="Bamboo toothbrush in handmade ceramic cup"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover scale-105"
              />
            </div>

            <div className="absolute top-1 right-8 sm:right-16 w-18 h-18 rounded-full bg-[#9da794]/90 backdrop-blur-xs flex flex-col items-center justify-center text-center text-[#f8f6f0] shadow-sm transform rotate-6">
              <span className="text-[10px] font-medium leading-tight">
                eco
                <br />
                friendly
              </span>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pl-4">
            <span className="text-[11px] sm:text-xs font-normal tracking-[0.24em] text-[#6b665c] uppercase block">
              Featured
            </span>

            <h2 className="font-outfit font-extralight font-[200] text-2xl sm:text-3xl lg:text-[42px] text-[#262420] leading-[1.1]">
              <Link
                href={`/shop/${FEATURED_HERO_PRODUCT.id}`}
                className="hover:underline"
              >
                Bamboo Toothbrush Set
              </Link>
            </h2>

            <p className="text-xs sm:text-sm text-[#5c574e] font-light max-w-sm">
              A cleaner planet, one brush at a time.
            </p>

            <div className="text-lg sm:text-xl font-light text-[#22211e]">
              $12
            </div>

            <div className="pt-1">
              <button
                onClick={handleAddToCart}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#272622] text-[#f8f6f0] text-[10px] uppercase tracking-[0.22em] font-medium rounded-full hover:bg-[#141412] transition-all transform active:scale-95 shadow-sm"
              >
                {added ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Added to Cart</span>
                  </>
                ) : (
                  <>
                    <span>Add to Cart</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

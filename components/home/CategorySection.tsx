import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  name: string;
  slug: string;
}

const CATEGORY_ITEMS: CategoryItem[] = [
  { name: "Skincare", slug: "skincare" },
  { name: "Home", slug: "home" },
  { name: "Bath", slug: "bath" },
  { name: "Lifestyle", slug: "lifestyle" }
];

export default function CategorySection() {
  return (
    <section className="w-full min-h-[40vh] lg:h-[40vh] bg-[#f4f0e6] py-6 sm:py-8 border-b border-[#dad3c2] flex items-center">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3">
            <span className="text-[11px] sm:text-xs font-normal tracking-[0.24em] text-[#6b665c] uppercase block">
              Shop by Category
            </span>
          </div>

          <div className="lg:col-span-6 space-y-1.5 sm:space-y-2">
            {CATEGORY_ITEMS.map((item) => (
              <Link
                key={item.slug}
                href={`/shop?category=${item.slug}`}
                className="group flex items-center justify-between py-1.5 border-b border-transparent hover:border-[#cfc8b8] transition-all"
              >
                <span className="font-outfit font-extralight font-[200] text-2xl sm:text-3xl lg:text-[38px] text-[#262420] group-hover:text-[#4d483e] transition-colors leading-tight">
                  {item.name}
                </span>
                <ArrowRight className="w-4 h-4 text-[#22211e] transition-transform duration-300 group-hover:translate-x-2" />
              </Link>
            ))}
          </div>

          <div className="lg:col-span-3 flex lg:justify-end items-center pt-4 lg:pt-0">
            <div className="relative select-none pointer-events-none transform rotate-3">
              <div className="font-[family-name:var(--font-cormorant)] italic text-sm sm:text-base text-[#47443c]/85 leading-snug">
                simple
                <br />
                things,
                <br />
                real
                <br />
                joy.
              </div>
              <div className="w-12 h-0.5 bg-[#47443c]/35 mt-1 transform -rotate-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

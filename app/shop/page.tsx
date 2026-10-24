"use client";

import React, { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SlidersHorizontal, ChevronDown, RotateCcw } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
import ProductCard from "@/components/ProductCard";

const BROWSE_LINKS = [
  { id: "all", label: "All Products" },
  { id: "bath", label: "Bath" },
  { id: "kitchen", label: "Kitchen" },
  { id: "new", label: "New" },
  { id: "onthego", label: "On the Go" },
  { id: "sale", label: "Sale" },
  { id: "skincare", label: "Skincare" },
  { id: "home", label: "Home" }
];

function ShopContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const searchQuery = searchParams.get("q") || "";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [maxPrice, setMaxPrice] = useState(25);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [sortBy, setSortBy] = useState("recommended");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    if (activeCategory !== "all") {
      if (activeCategory === "new") {
        list = list.filter((p) => p.badge === "New");
      } else if (activeCategory === "sale") {
        list = list.filter((p) => !!p.originalPrice);
      } else {
        list = list.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase()
        );
      }
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }

    list = list.filter((p) => p.price <= maxPrice);

    if (inStockOnly) {
      list = list.filter((p) => p.inStock);
    }

    if (sortBy === "price_asc") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_desc") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [activeCategory, searchQuery, maxPrice, inStockOnly, sortBy]);

  const activeCategoryLabel =
    BROWSE_LINKS.find((c) => c.id === activeCategory)?.label || "All Products";

  const handleResetFilters = () => {
    setActiveCategory("all");
    setMaxPrice(25);
    setInStockOnly(false);
    setSortBy("recommended");
  };

  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <nav className="flex items-center gap-2 text-xs text-[#7d8276] mb-6">
          <Link href="/" className="hover:text-[#222521] transition-colors">
            Home
          </Link>
          <span>&gt;</span>
          <span className="text-[#222521] font-medium">{activeCategoryLabel}</span>
        </nav>

        <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#e8e4da] pb-8">
          <div>
            <h1 className="font-outfit font-light text-4xl sm:text-5xl lg:text-6xl text-[#222521]">
              {searchQuery ? `Search: "${searchQuery}"` : activeCategoryLabel}
            </h1>
            <p className="text-xs sm:text-sm text-[#73776e] mt-2">
              Consciously curated goods for sustainable living rituals.
            </p>
          </div>

          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="lg:hidden flex items-center justify-center gap-2 px-4 py-2.5 rounded-full border border-[#d6d0c2] text-xs uppercase tracking-widest text-[#222521]"
          >
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Filter and Sort</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <aside
            className={`lg:col-span-3 space-y-10 ${
              mobileFilterOpen ? "block" : "hidden lg:block"
            }`}
          >
            <div className="space-y-4">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6d7266]">
                Browse by
              </h2>
              <ul className="space-y-2.5 text-sm">
                {BROWSE_LINKS.map((link) => {
                  const isActive = activeCategory === link.id;
                  return (
                    <li key={link.id}>
                      <button
                        onClick={() => {
                          setActiveCategory(link.id);
                          setMobileFilterOpen(false);
                        }}
                        className={`text-left transition-colors ${
                          isActive
                            ? "text-[#222521] font-semibold underline underline-offset-4"
                            : "text-[#676c61] hover:text-[#222521]"
                        }`}
                      >
                        {link.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="border-t border-[#e8e4da] pt-8 space-y-6">
              <h2 className="text-xs font-semibold tracking-[0.2em] uppercase text-[#6d7266]">
                Filter by
              </h2>

              <div className="space-y-3">
                <div className="flex justify-between text-xs text-[#52574c]">
                  <span>Maximum Price</span>
                  <span className="font-medium">€{maxPrice.toFixed(2)}</span>
                </div>
                <input
                  type="range"
                  min="4"
                  max="25"
                  step="0.5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-[#868c7e]">
                  <span>€4</span>
                  <span>€25</span>
                </div>
              </div>

              <div className="pt-2">
                <label className="flex items-center gap-3 cursor-pointer text-xs text-[#52574c]">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-4 h-4 rounded border-[#c7c2b5] text-[#2b3627] focus:ring-0"
                  />
                  <span>In Stock Only</span>
                </label>
              </div>

              {(activeCategory !== "all" || maxPrice < 25 || inStockOnly) && (
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-2 text-xs text-[#787d72] hover:text-[#222521] pt-2 transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </aside>

          <main className="lg:col-span-9 space-y-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#e8e4da] text-xs text-[#6e7367]">
              <span>
                {filteredProducts.length}{" "}
                {filteredProducts.length === 1 ? "product" : "products"}
              </span>

              <div className="flex items-center gap-2">
                <span className="hidden sm:inline">Sort by:</span>
                <div className="relative inline-block">
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-transparent pr-6 py-1 text-xs font-medium text-[#222521] focus:outline-none cursor-pointer"
                  >
                    <option value="recommended">Recommended</option>
                    <option value="price_asc">Price Low to High</option>
                    <option value="price_desc">Price High to Low</option>
                    <option value="rating">Top Customer Rated</option>
                  </select>
                  <ChevronDown className="w-3.5 h-3.5 text-[#222521] absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
              </div>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-24 text-center space-y-4">
                <p className="font-outfit font-light text-2xl text-[#222521]">
                  No essentials matched your selection
                </p>
                <p className="text-xs text-[#73776e]">
                  Try adjusting your price range or browsing all categories.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-6 py-2.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest rounded-full hover:bg-[#1a2018] transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense
      fallback={
        <div className="w-full min-h-screen bg-[#f8f6f0] flex items-center justify-center">
          <div className="font-outfit font-light text-2xl text-[#52574c]">Loading catalog...</div>
        </div>
      }
    >
      <ShopContent />
    </Suspense>
  );
}

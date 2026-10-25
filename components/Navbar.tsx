"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { totalItems, openCart } = useCart();
  const { user, isLoggedIn } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?q=${encodeURIComponent(searchQuery.trim())}`;
      setSearchOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#eae3d2]/90 backdrop-blur-xs border-b border-[#dcd4c3]/60 transition-colors">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link
            href="/"
            className="font-outfit text-3xl sm:text-4xl tracking-[0.06em] font-light text-[#232320] hover:opacity-80 transition-opacity"
          >
            NUVÉ
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-10 font-outfit text-xs tracking-[0.2em] font-normal text-[#454238]">
          <Link
            href="/shop"
            className="hover:text-[#181816] transition-colors py-1"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="hover:text-[#181816] transition-colors py-1"
          >
            About
          </Link>
          <Link
            href="/journal"
            className="hover:text-[#181816] transition-colors py-1"
          >
            Journal
          </Link>
          <Link
            href="/contact"
            className="hover:text-[#181816] transition-colors py-1"
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-6 sm:gap-8">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search items"
            className="text-[#3b3830] hover:text-[#181816] transition-colors p-1"
          >
            <Search className="w-4 h-4 stroke-[1.6]" />
          </button>

          <Link
            href="/login"
            className="hidden sm:flex items-center gap-2 text-xs tracking-wide text-[#3b3830] hover:text-[#181816] transition-colors"
          >
            <User className="w-4 h-4 stroke-[1.6]" />
            <span>{isLoggedIn && user ? user.name : "Log In"}</span>
          </Link>

          <button
            onClick={openCart}
            aria-label="Shopping bag"
            className="flex items-center gap-1.5 text-xs tracking-wider text-[#3b3830] hover:text-[#181816] transition-colors p-1"
          >
            <ShoppingBag className="w-4 h-4 stroke-[1.6]" />
            <span className="font-normal text-xs">({totalItems})</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden text-[#3b3830] p-1"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-[#dcd4c3] bg-[#e4ddd0] px-6 py-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <form
            onSubmit={handleSearchSubmit}
            className="max-w-xl mx-auto flex items-center gap-3"
          >
            <Search className="w-4 h-4 text-[#73776e]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search brushes, cotton sacks, oils..."
              className="w-full bg-transparent border-b border-[#2b3627]/40 py-2 text-sm text-[#222521] focus:outline-none focus:border-[#2b3627] placeholder:text-[#888377]"
              autoFocus
            />
            <button
              type="submit"
              className="text-xs uppercase tracking-widest font-medium text-[#2b3627] hover:underline"
            >
              Search
            </button>
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              className="text-xs text-[#73776e] hover:text-[#222521]"
            >
              Close
            </button>
          </form>
        </div>
      )}

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#dcd4c3] bg-[#eae3d2] px-6 py-6 space-y-4">
          <Link
            href="/shop"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base tracking-wide text-[#222521] py-2"
          >
            Shop All Products
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base tracking-wide text-[#222521] py-2"
          >
            About NUVÉ
          </Link>
          <Link
            href="/journal"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base tracking-wide text-[#222521] py-2"
          >
            Journal
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base tracking-wide text-[#222521] py-2"
          >
            Contact
          </Link>
          <div className="pt-4 border-t border-[#dcd4c3]">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2 text-sm text-[#222521]"
            >
              <User className="w-4 h-4" />
              <span>{isLoggedIn && user ? user.name : "Account Login"}</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

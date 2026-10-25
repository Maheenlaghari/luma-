"use client";

import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[30vh] lg:h-[30vh] bg-[#f8f6f0] border-t border-[#e6e2d8] flex flex-col justify-between py-6 lg:py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full flex-1 flex flex-col justify-between">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pb-4 border-b border-[#e6e2d8]/80">
          <div className="md:col-span-5 space-y-2">
            <Link
              href="/"
              className="font-outfit text-2xl sm:text-3xl tracking-[0.06em] font-light text-[#222521] inline-block"
            >
              NUVÉ
            </Link>
            <p className="text-xs text-[#6f736a] max-w-sm leading-relaxed">
              Thoughtfully designed everyday essentials created to bring quiet balance and conscious simplicity to your daily rituals.
            </p>
          </div>

          <div className="md:col-span-4 space-y-2">
            <span className="text-[10px] sm:text-[11px] uppercase tracking-widest font-medium text-[#484e42] block">
              Stay Connected
            </span>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 pt-0.5"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-[#efebe3] border border-[#ded8cb] rounded-full px-3.5 py-1.5 text-xs text-[#222521] placeholder:text-[#8d9285] focus:outline-none focus:border-[#2b3627] flex-1"
              />
              <button
                type="submit"
                className="px-4 py-1.5 bg-[#2d352a] text-[#f7f5f0] text-[10px] uppercase tracking-widest rounded-full hover:bg-[#1c221a] transition-colors shrink-0"
              >
                Join
              </button>
            </form>
          </div>

          <div className="md:col-span-3 flex md:justify-end items-center gap-3 text-[#484e42] pt-2 md:pt-0">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full bg-[#eee9de] hover:bg-[#e2ddd0] hover:text-[#222521] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.75]"
                viewBox="0 0 24 24"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="p-2 rounded-full bg-[#eee9de] hover:bg-[#e2ddd0] hover:text-[#222521] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.75]"
                viewBox="0 0 24 24"
              >
                <line x1="12" y1="9" x2="12" y2="21" />
                <path d="M10 9a4 4 0 1 1 8 0c0 4-3 7-6 7" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </a>
            <a
              href="mailto:care@nuveessentials.com"
              aria-label="Email support"
              className="p-2 rounded-full bg-[#eee9de] hover:bg-[#e2ddd0] hover:text-[#222521] transition-colors"
            >
              <svg
                className="w-3.5 h-3.5 fill-none stroke-current stroke-[1.75]"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-[#787c73]">
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/shop" className="hover:text-[#222521] transition-colors">
              Shop
            </Link>
            <Link href="/about" className="hover:text-[#222521] transition-colors">
              About
            </Link>
            <Link href="/journal" className="hover:text-[#222521] transition-colors">
              Journal
            </Link>
            <Link href="/contact" className="hover:text-[#222521] transition-colors">
              Contact
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-right">
            <span>© 2025 NUVÉ. All rights reserved.</span>
            <span className="hidden sm:inline text-[#ccc6b8]">|</span>
            <span className="font-outfit italic text-[#555a50]">
              A kinder home. A healthier planet.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { ARTICLES } from "@/lib/data";

export default function JournalPage() {
  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6a7063]">
            The NUVÉ Journal
          </span>
          <h1 className="font-outfit font-light text-4xl sm:text-6xl text-[#222521]">
            Quiet musings on slow living
          </h1>
          <p className="text-sm text-[#5d6356] leading-relaxed">
            Perspectives, seasonal guides and daily rituals to encourage grounded harmony in everyday moments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col space-y-4 bg-[#efece4] rounded-3xl overflow-hidden p-6 border border-[#e3ded2] transition-colors hover:bg-[#eae5db]"
            >
              <Link
                href={`/journal/${article.id}`}
                className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden block"
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={100}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </Link>

              <div className="flex items-center justify-between text-xs text-[#71776a]">
                <span className="uppercase tracking-wider font-medium text-[#44503e]">
                  {article.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              <h2 className="font-outfit font-light text-2xl text-[#222521] group-hover:text-[#434e3e] transition-colors leading-snug">
                <Link href={`/journal/${article.id}`}>
                  {article.title}
                </Link>
              </h2>

              <p className="text-xs text-[#5f6558] leading-relaxed line-clamp-3">
                {article.excerpt}
              </p>

              <div className="pt-2 mt-auto">
                <Link
                  href={`/journal/${article.id}`}
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#222521] group-hover:text-[#434e3e]"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

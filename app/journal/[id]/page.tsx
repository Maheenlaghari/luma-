import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "@/lib/data";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ARTICLES.map((article) => ({
    id: article.id
  }));
}

export default async function ArticleDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = ARTICLES.find((a) => a.id === id || a.slug === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen py-12 sm:py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="mb-8">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#6c7265] hover:text-[#222521] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Journal</span>
          </Link>
        </div>

        <article className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-[#707669]">
              <span className="uppercase tracking-widest font-semibold text-[#3d4937]">
                {article.category}
              </span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                <span>{article.readTime}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                <span>{article.date}</span>
              </div>
            </div>

            <h1 className="font-outfit font-light text-4xl sm:text-5xl lg:text-6xl text-[#222521] leading-tight">
              {article.title}
            </h1>
          </div>

          <div className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden bg-[#efece4] shadow-xs">
            <Image
              src={article.image}
              alt={article.title}
              fill
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover"
            />
          </div>

          <div className="prose max-w-none text-[#4a5043] font-light text-base sm:text-lg leading-relaxed space-y-6 pt-4">
            <p className="text-xl font-outfit font-light text-[#222521] leading-relaxed italic border-l-2 border-[#3d4937] pl-6 py-1">
              {article.excerpt}
            </p>
            <p>{article.content}</p>
            <p>
              When we treat our tools and body with unhurried awareness, daily routines transform from mundane obligations into moments of restorative joy. Slow down, honor the natural textures around you and breathe deeply.
            </p>
          </div>

          <div className="pt-12 border-t border-[#e8e4da] flex items-center justify-between">
            <Link
              href="/shop"
              className="px-8 py-3.5 bg-[#2d352a] text-[#f7f5f0] text-xs uppercase tracking-widest rounded-full hover:bg-[#1a2018] transition-colors"
            >
              Explore Related Essentials
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

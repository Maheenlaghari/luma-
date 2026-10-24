import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] lg:h-[80vh] bg-[#eae3d2] flex items-center overflow-hidden border-b border-[#dad3c2]">
      <div className="w-full h-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[80vh] lg:h-[80vh] items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-center px-8 sm:px-12 lg:pl-16 lg:pr-6 py-10 lg:py-14 z-10 space-y-6">
            <span className="text-[11px] sm:text-xs font-normal tracking-[0.24em] text-[#6b665c] uppercase block">
              Natural Living, Made Simple
            </span>

            <h1 className="font-outfit text-5xl sm:text-6xl md:text-7xl lg:text-[72px] xl:text-[78px] font-extralight font-[200] tracking-[-0.03em] text-[#262420] leading-[1.04]">
              Better
              <br />
              habits for
              <br />
              a calmer you.
            </h1>

            <p className="text-sm sm:text-base text-[#5c574e] font-light max-w-sm leading-relaxed">
              Thoughtfully designed essentials for your everyday rituals home, body and beyond.
            </p>

            <div className="pt-1">
              <Link
                href="/shop"
                className="inline-flex items-center gap-3 pb-1 border-b border-[#22211e] text-[11px] font-medium uppercase tracking-[0.22em] text-[#22211e] hover:opacity-75 transition-opacity group"
              >
                <span>Explore Shop</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 relative min-h-[420px] lg:h-full w-full">
            <Image
              src="/assets/hero.jpe"
              alt="Natural ceramic vase with leafy branches and soap on sunlit table"
              fill
              priority
              quality={100}
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-center lg:object-bottom"
            />

            <div className="absolute top-12 right-8 sm:right-12 lg:right-16 select-none pointer-events-none transform rotate-3 z-20">
              <div className="font-[family-name:var(--font-cormorant)] italic text-base sm:text-lg text-[#47443c]/85 leading-tight tracking-wide">
                small
                <br />
                choices
                <br />
                big
                <br />
                changes
              </div>
              <div className="w-14 h-0.5 bg-[#47443c]/35 mt-1.5 transform -rotate-6" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

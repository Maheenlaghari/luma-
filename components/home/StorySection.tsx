import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function StorySection() {
  return (
    <section className="w-full min-h-[50vh] lg:h-[50vh] grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-b border-[#cfd6c8]">
      <div className="bg-[#D6D4C4] flex flex-col justify-center px-8 sm:px-14 lg:px-20 xl:px-24 py-12 lg:py-16 space-y-6">
        <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.24em] text-[#676e60] uppercase block">
          Our Story
        </span>

        <h2 className="font-outfit font-light text-3xl sm:text-4xl lg:text-[50px] xl:text-[54px] text-[#22211e] leading-[1.08]">
          Small rituals.
          <br />
          A bigger impact.
        </h2>

        <p className="text-xs sm:text-sm text-[#545b4e] font-light leading-relaxed max-w-sm">
          We started Luma with a simple belief that everyday essentials can be kinder to your home, your body and the planet.
        </p>

        <div className="pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2.5 text-[11px] font-medium uppercase tracking-[0.22em] text-[#22211e] hover:opacity-70 transition-opacity group"
          >
            <span>Learn More</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <div className="relative w-full min-h-[380px] lg:h-full">
        <Image
          src="/assets/sec-2.jpe"
          alt="Luma organic canvas tote bag hanging on wooden chair with green plant"
          fill
          priority
          quality={100}
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover object-center"
        />
      </div>
    </section>
  );
}

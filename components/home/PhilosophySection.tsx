import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhilosophySection() {
  return (
    <section className="relative w-full min-h-[30vh] lg:h-[30vh] bg-[#242f21] text-[#f7f5f0] flex items-center overflow-hidden py-6 lg:py-8">
      <div className="absolute inset-0 opacity-25 mix-blend-luminosity pointer-events-none">
        <Image
          src="/assets/sec-5.jpe"
          alt="Natural organic botanical leaves background"
          fill
          priority
          quality={100}
          sizes="100vw"
          className="object-cover object-left"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          <div className="lg:col-span-6 space-y-2 sm:space-y-3">
            <span className="text-[10px] sm:text-[11px] font-normal tracking-[0.24em] text-[#a1ad99] uppercase block">
              Our Philosophy
            </span>

            <h2 className="font-outfit font-extralight font-[200] text-2xl sm:text-3xl lg:text-[42px] text-[#f7f5f0] leading-[1.08]">
              Less waste.
              <br />
              More living.
            </h2>
          </div>

          <div className="lg:col-span-6 space-y-4 lg:pl-8 lg:border-l lg:border-[#3c4a37]">
            <p className="text-xs sm:text-sm text-[#cad3c3] font-light leading-relaxed max-w-lg">
              We believe in mindful choices, thoughtful design and a cleaner future. Because a better tomorrow starts with the little things like what you bring into your home.
            </p>

            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 pb-1 border-b border-[#f7f5f0] text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.22em] text-[#f7f5f0] hover:text-[#d3dccf] hover:border-[#d3dccf] transition-colors group"
              >
                <span>Our Process</span>
                <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

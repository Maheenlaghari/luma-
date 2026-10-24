import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Sparkles, Heart } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="w-full bg-[#f8f6f0] min-h-screen">
      <section className="py-16 sm:py-24 border-b border-[#e8e4da]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6a7063]">
            Our Story and Purpose
          </span>
          <h1 className="font-outfit font-light text-4xl sm:text-6xl text-[#222521] leading-tight">
            We believe everyday objects hold the power to shape quiet calm.
          </h1>
          <p className="text-base text-[#5d6356] font-light max-w-2xl mx-auto leading-relaxed">
            Luma was created from a personal search for simplicity. In a world full of clutter and disposable objects, we choose to pause, pare back and craft timeless essentials that respect your body and our collective planet.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 border-b border-[#e8e4da]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
              <Image
                src="/assets/about-artisan.jpg"
                alt="Artisan ceramicist shaping handmade stoneware clay vessels in sunlit studio"
                fill
                quality={100}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-6 space-y-6 lg:pl-6">
              <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6c7265]">
                Conscious Sourcing
              </span>
              <h2 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521]">
                Every timber fiber and seed oil carries intention.
              </h2>
              <p className="text-sm text-[#5a6053] leading-relaxed">
                We partner exclusively with multi generational cooperatives, certified organic growers and mindful ceramic artists. From sustainably harvested bamboo groves to cold pressed plant seeds, each material is traced from origin to package.
              </p>
              <div className="pt-2">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 pb-1 border-b border-[#222521] text-xs uppercase tracking-widest font-semibold text-[#222521] hover:text-[#52594a] transition-colors"
                >
                  <span>Explore Our Creations</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#efece4] border-b border-[#e3ded2]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#6a7063]">
              Our Guiding Pillars
            </span>
            <h2 className="font-outfit font-light text-3xl sm:text-4xl text-[#222521]">
              Purity in form and ethics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#f8f6f0] border border-[#e2dcd0] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e3e8dc] text-[#3b4736] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-outfit font-light text-2xl text-[#222521]">Zero Plastic</h3>
              <p className="text-xs text-[#63695c] leading-relaxed">
                From our natural bristles to biodegradable shipping mailers, synthetic plastics have no home in our inventory.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f6f0] border border-[#e2dcd0] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e3e8dc] text-[#3b4736] flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="font-outfit font-light text-2xl text-[#222521]">Tactile Grace</h3>
              <p className="text-xs text-[#63695c] leading-relaxed">
                Raw ceramics, hand turned beech timber and unbleached cotton that age with authentic character over seasons of use.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#f8f6f0] border border-[#e2dcd0] space-y-4">
              <div className="w-12 h-12 rounded-full bg-[#e3e8dc] text-[#3b4736] flex items-center justify-center">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-outfit font-light text-2xl text-[#222521]">Fair Trade</h3>
              <p className="text-xs text-[#63695c] leading-relaxed">
                Honoring artisans with equitable compensation and healthy conditions at every step of cultivation and crafting.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

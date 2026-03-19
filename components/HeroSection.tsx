"use client";

import { useTranslation } from "@/hooks/useTranslation";
import Image from "next/image";

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="relative flex min-h-screen items-end justify-start overflow-hidden">
      {/* Background image with desaturated overlay */}
      <div className="absolute inset-0" aria-hidden="true">
        <Image
          src="/images/old-farmhouse.svg"
          alt={t("hero.imageAlt")}
          fill
          priority
          className="object-cover"
          style={{ filter: "grayscale(65%) brightness(0.5)" }}
        />
      </div>

      {/* Gradient overlay — bottom-to-top fade into the page background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(9,9,11,0.3) 0%, rgba(9,9,11,0.7) 60%, rgba(9,9,11,1) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-24 pt-32">
        <p className="mb-4 text-xs tracking-[0.3em] text-zinc-500 uppercase">
          {t("hero.locationTag")}
        </p>
        <h1 className="max-w-2xl font-serif text-5xl font-light leading-tight text-zinc-100 md:text-6xl lg:text-7xl">
          {t("hero.title")}
        </h1>
        <p className="mt-6 max-w-md text-lg font-light text-zinc-400">
          {t("hero.subtitle")}
        </p>
        <a
          href="#booking"
          className="mt-10 inline-block border border-zinc-500 px-8 py-3 text-sm tracking-widest text-zinc-300 uppercase transition-all hover:border-zinc-300 hover:text-zinc-100"
        >
          {t("nav.book")}
        </a>
      </div>
    </section>
  );
}

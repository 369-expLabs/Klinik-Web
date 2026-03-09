"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const loudQuestions = [
  {
    text: "Pikiran Berputar Tanpa Henti?",
    align: "self-start text-left",
  },
  {
    text: "Marah Tiba-Tiba, Lalu Menyesal?",
    align: "self-end text-right md:text-center",
  },
  {
    text: "Rumah Tangga Terasa Semakin Dingin?",
    align: "self-start text-left md:translate-x-12",
  },
  {
    text: "Masa Lalu Masih Terus Membayangi?",
    align: "self-end text-right md:-translate-x-12",
  },
];

export default function PainMirror() {
  const containerRef = useRef<HTMLElement>(null);
  const questionsRef = useRef<(HTMLHeadingElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      questionsRef.current.forEach((q) => {
        if (!q) return;

        // GSAP ScrollTrigger Blur-to-Focus Effect (Intensity 8)
        gsap.fromTo(
          q,
          {
            filter: "blur(20px)",
            opacity: 0,
            y: 50,
            scale: 0.95
          },
          {
            filter: "blur(0px)",
            opacity: 1,
            y: 0,
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: q,
              start: "top 85%", // Starts focusing when it enters viewport
              end: "top 45%",   // Fully focused by the time it reaches center
              scrub: 1.5,       // Smooth scrubbing
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    // Materiality & Contrast: Deep Charcoal background with Grainy Texture Overlay
    <section
      ref={containerRef}
      className="relative bg-charcoal py-32 md:py-48 px-4 md:px-8 overflow-hidden z-0"
    >
      {/* Grainy Texture Overlay for Analog Depth */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-overlay"
        style={{ zIndex: "var(--z-layer-overlay)", backgroundImage: "url('/noise.png')" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Anti-Center Bias: Split Screen Header Layout */}
        <div className="mb-24 md:mb-40 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-4">
              Apakah Ini Terasa Familiar?
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream leading-tight">
              Apa yang Membuat Hidupmu{" "}
              <span className="italic text-sage-light block mt-1">Terasa Berat?</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-taupe-light font-satoshi text-sm md:text-base leading-relaxed">
              Kamu tidak sendirian. Jutaan orang merasakan hal yang sama — dan
              banyak dari mereka sudah menemukan jalan keluarnya.
            </p>
          </div>
        </div>

        {/* Action Area: Loud Typography and Asymmetric Kinetic Layout (Variance 8) */}
        <div className="flex flex-col gap-12 md:gap-24 pb-32">
          {loudQuestions.map((item, i) => (
            <h3
              key={i}
              ref={(el) => { questionsRef.current[i] = el; }}
              className={`font-playfair text-6xl md:text-8xl lg:text-[120px] font-bold text-cream tracking-tighter leading-[0.85] text-balance will-change-[filter,transform,opacity] ${item.align}`}
            >
              {item.text}
            </h3>
          ))}
        </div>

        <div className="mt-12 md:mt-24 text-center">
          <p className="text-taupe-light font-satoshi text-sm md:text-base italic tracking-wide max-w-[50ch] mx-auto leading-relaxed">
            Jika kamu mengangguk saat membaca salah satu di atas — ini bukan
            kebetulan. Kamu sudah berada di tempat yang tepat.
          </p>
        </div>

      </div>
    </section>
  );
}

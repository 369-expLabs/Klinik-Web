"use client";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react"; // Mengikuti Rule Icons SKILL.md

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const ctx = gsap.context(() => {
      badgesRef.current.forEach((badge) => {
        if (!badge) return;
        gsap.to(badge, {
          yPercent: -20, // Parallax lebih intens
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      });
    }, heroRef);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    // Rule: Viewport Stability [CRITICAL] - Menggunakan min-h-[100dvh]
    <section ref={heroRef} className="relative min-h-[100dvh] bg-cream flex items-center overflow-hidden">
      {/* Variance 8: Asymmetric background positioning */}
      <div className="absolute top-[-10%] right-[-5%] w-[70vw] h-[70vw] bg-sage/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 items-center">

          {/* Left: Copy with Deterministic Typography */}
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[10px] font-bold text-sage-dark tracking-[0.2em] uppercase">
                Established 2025
              </span>
            </div>

            {/* Rule: tracking-tighter & leading-none untuk Premium Look */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal tracking-tighter leading-[0.95] mb-8 text-balance">
              Bebaskan Diri dari <br />
              <span className="text-sage-dark italic font-normal">Trauma & Emosi</span>
            </h1>

            {/* Rule: max-w-[65ch] untuk readability */}
            <p className="text-lg text-taupe leading-relaxed mb-10 max-w-[50ch]">
              Selesaikan masalah mental langsung ke akarnya.
              <span className="text-charcoal font-medium"> Cepat, permanen, dan tanpa obat.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              {/* Rule: Tactile Feedback active:scale-[0.98] */}
              <a href="#" className="inline-flex items-center justify-center gap-3 bg-sage-dark text-cream font-semibold px-10 py-5 rounded-full transition-all active:scale-[0.96] shadow-xl hover:shadow-sage/20">
                <WhatsappLogo size={20} weight="bold" />
                Konsultasi Sekarang
              </a>
              <a href="#proses" className="inline-flex items-center justify-center gap-2 group text-charcoal font-semibold px-8 py-5">
                Pelajari Proses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Asymmetric Asset & Liquid Glass */}
          <div className={`relative transition-all duration-1000 delay-300 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <Image src="/illustrations/hero.jpg" alt="Healing" width={800} height={1000} className="w-full object-cover aspect-[4/5]" priority />
            </div>

            {/* Rule: Liquid Glass Refraction (Inner border + Inner shadow) */}
            <div ref={(el) => { badgesRef.current[0] = el; }}
              className="absolute -bottom-8 -left-8 p-8 z-20 premium-glass-card shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] border-white/30">
              <p className="text-4xl font-bold font-playfair text-charcoal tracking-tighter">90%</p>
              <p className="text-[10px] uppercase tracking-widest text-taupe font-bold mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

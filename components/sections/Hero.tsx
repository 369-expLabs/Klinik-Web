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
  const bgBlobRef = useRef<HTMLDivElement>(null);
  const magnetRef = useRef<HTMLAnchorElement>(null);
  const magnetTextRef = useRef<HTMLSpanElement>(null);

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

      // Background Blob Parallax (Moves slower due to depth)
      if (bgBlobRef.current) {
        gsap.to(bgBlobRef.current, {
          yPercent: 30,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          }
        });
      }

      // Magnetic Button Physics
      const magnet = magnetRef.current;
      const magnetText = magnetTextRef.current;

      if (magnet && magnetText) {
        magnet.addEventListener("mousemove", (e) => {
          const rect = magnet.getBoundingClientRect();
          const objX = rect.left + rect.width / 2;
          const objY = rect.top + rect.height / 2;
          const x = (e.clientX - objX) * 0.3;
          const y = (e.clientY - objY) * 0.3;

          gsap.to(magnet, { x, y, duration: 1, ease: "power3.out" });
          gsap.to(magnetText, { x: x * 0.5, y: y * 0.5, duration: 1, ease: "power3.out" });
        });

        magnet.addEventListener("mouseleave", () => {
          gsap.to(magnet, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
          gsap.to(magnetText, { x: 0, y: 0, duration: 1.2, ease: "elastic.out(1, 0.3)" });
        });
      }

    }, heroRef);
    return () => { clearTimeout(t); ctx.revert(); };
  }, []);

  return (
    // Rule: Viewport Stability [CRITICAL] - Menggunakan min-h-[100dvh]
    <section ref={heroRef} className="relative min-h-[100dvh] bg-cream flex items-center overflow-hidden z-0">
      {/* Variance 8: Asymmetric background positioning (Layer 0) */}
      <div ref={bgBlobRef} className="absolute top-[-20%] right-[-10%] w-[90vw] h-[90vw] bg-sage/10 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-40 pb-32 md:pt-48 md:pb-40 w-full relative z-20">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-center">

          {/* Left: Copy with Deterministic Typography */}
          <div className={`transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            <div className="inline-flex items-center gap-2 bg-sage/10 border border-sage/20 rounded-full px-4 py-1.5 mb-8">
              <span className="text-[10px] font-bold text-sage-dark tracking-[0.2em] uppercase">
                Established 2025
              </span>
            </div>

            {/* Rule: tracking-tighter and leading-none untuk Premium Look */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal tracking-tighter leading-[0.95] mb-8 text-balance">
              Bebaskan Diri dari <br />
              <span className="text-sage-dark italic font-normal">Trauma and Emosi</span>
            </h1>

            {/* Rule: max-w-[65ch] untuk readability */}
            <p className="text-lg text-taupe leading-relaxed mb-10 max-w-[50ch]">
              Selesaikan masalah mental langsung ke akarnya.
              <span className="text-charcoal font-medium"> Cepat, permanen, dan tanpa obat.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              {/* Rule: Tactile Feedback active:scale-[0.98] combined with Magnetic Pull */}
              <a
                href="#booking"
                ref={magnetRef}
                className="inline-flex items-center justify-center bg-sage-dark text-cream font-semibold px-10 py-5 rounded-full transition-shadow hover:shadow-2xl shadow-sage/30 relative z-20"
              >
                <span ref={magnetTextRef} className="flex items-center gap-3 pointer-events-none">
                  <WhatsappLogo size={20} weight="bold" />
                  Konsultasi Sekarang
                </span>
              </a>
              <a href="#proses" className="inline-flex items-center justify-center gap-2 group text-charcoal font-semibold px-8 py-5 transition-all hover:text-sage-dark z-20 relative">
                Pelajari Proses <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Asymmetric Asset and Liquid Glass */}
          <div className={`relative transition-all duration-1000 delay-300 z-10 ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"}`}>
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <Image src="/illustrations/hero.jpg" alt="Healing" width={800} height={1000} className="w-full object-cover aspect-[4/5]" priority />
            </div>

            {/* Rule: Liquid Glass Refraction (Inner border + Inner shadow + Sage tinted drop shadow) */}
            <div ref={(el) => { badgesRef.current[0] = el; }}
              className="absolute -bottom-12 -left-12 md:-left-20 p-8 z-30 premium-glass-card shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_20px_40px_rgba(125,144,126,0.2)] border border-white/40 backdrop-blur-2xl rounded-3xl">
              <p className="text-4xl md:text-5xl font-bold font-playfair text-charcoal tracking-tighter">90%</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-taupe font-bold mt-1">Success Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

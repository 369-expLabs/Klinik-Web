"use client";
import { useEffect, useRef } from "react";
import { Sparkle, Brain, CheckCircle, NavigationArrow, ArrowRight } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Pre-Talk",
    duration: "30–60 menit",
    desc: "Sesi perbincangan awal yang hangat dan tanpa penilaian. Kami memahami situasimu, riwayat masalah, dan tujuanmu. Kamu selalu dalam kontrol.",
    icon: <Sparkle size={32} weight="regular" />,
  },
  {
    num: "02",
    title: "Relaksasi Dalam (Induksi)",
    duration: "30–60 menit",
    desc: "Dipandu untuk mencapai kondisi relaksasi mendalam — gelombang otak Theta. Kamu tetap sadar sepenuhnya, bisa berbicara dan mengakhiri kapan saja.",
    icon: <NavigationArrow size={32} weight="regular" />,
  },
  {
    num: "03",
    title: "Reprogramming Bawah Sadar",
    duration: "30–90 menit",
    desc: "Inilah inti terapi. Dengan izinmu, file-file rusak di pikiran bawah sadar diidentifikasi dan di-reprogram. Tidak ada yang dipaksakan.",
    icon: <Brain size={32} weight="regular" />,
  },
  {
    num: "04",
    title: "Lega and Pemahaman Baru",
    duration: "30–60 menit",
    desc: "Kamu kembali ke kesadaran penuh dengan perasaan ringan, lega, dan pemahaman baru. Post-talk membantu mengintegrasikan perubahan.",
    icon: <CheckCircle size={32} weight="regular" />,
  },
];

export default function Process() {
  const containerRef = useRef<HTMLElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Draw SVG Path on Scroll
      if (pathRef.current) {
        const length = pathRef.current.getTotalLength();
        gsap.set(pathRef.current, { strokeDasharray: length, strokeDashoffset: length });

        gsap.to(pathRef.current, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 40%",
            end: "bottom 80%",
            scrub: 1, // Smooth scrub drawing
          }
        });
      }

      // 2. Staggered Spring Reveal for each Zig-Zag Step
      stepsRef.current.forEach((step, i) => {
        if (!step) return;
        const isEven = i % 2 === 0;

        gsap.fromTo(
          step,
          { opacity: 0, x: isEven ? -50 : 50, y: 30 },
          {
            opacity: 1,
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "elastic.out(1, 0.75)", // Approximating spring physics
            scrollTrigger: {
              trigger: step,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="proses" ref={containerRef} className="bg-cream-dark py-32 md:py-48 px-4 md:px-8 relative overflow-hidden">

      {/* Background ambient blobs (Variance 8 Texture) */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-sage/5 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[120px] translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Elite Header Typography */}
        <div className="text-center mb-24 md:mb-40 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-sage/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[10px] font-bold text-sage-dark tracking-[0.2em] uppercase font-satoshi">
              Clinical Transparency
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal tracking-tighter leading-none mb-6">
            Sederhana, Sadar, dan{" "}
            <span className="italic text-sage-dark font-normal">Menenangkan</span>
          </h2>

          <p className="text-taupe font-satoshi text-lg leading-relaxed max-w-[55ch]">
            Tidak ada yang misterius. Kamu tidak akan pingsan, tidak akan kehilangan kesadaran, dan <strong className="text-charcoal font-medium">tidak bisa dipaksa melakukan apa pun</strong> yang tidak kamu inginkan.
          </p>
        </div>

        {/* The Staggered Zig-Zag Architecture */}
        <div className="relative w-full max-w-5xl mx-auto">

          {/* Central Animated SVG Thread (Hidden on mobile for clean flow) */}
          <div className="hidden md:block absolute top-[10%] bottom-0 left-1/2 -translate-x-1/2 w-[2px] z-0">
            <svg width="100" height="100%" className="absolute top-0 left-1/2 -translate-x-1/2 stroke-cream overflow-visible" fill="none">
              <path
                ref={pathRef}
                d="M 50 0 C 50 200, -50 300, 50 500 C 150 700, -50 900, 50 1100 L 50 2000"
                strokeWidth="2"
                className="stroke-sage/40"
              />
            </svg>
          </div>

          <div className="space-y-24 md:space-y-40 relative z-10">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0;

              return (
                <div
                  key={i}
                  ref={(el) => { stepsRef.current[i] = el; }}
                  className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'md:flex-row-reverse' : ''}`}
                >

                  {/* Step Content */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <p className="font-mono text-xs md:text-sm font-bold text-sage-dark tracking-widest mb-4">
                      FASE {step.num}
                    </p>
                    <h3 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4 tracking-tight">
                      {step.title}
                    </h3>
                    <div className={`inline-flex items-center gap-2 bg-white/50 border border-white px-3 py-1 rounded-full mb-6 ${isEven ? 'md:ml-auto' : ''}`}>
                      <span className="w-2 h-2 rounded-full bg-sage-light animate-pulse" />
                      <span className="text-[10px] font-bold tracking-widest uppercase text-taupe font-satoshi">
                        {step.duration}
                      </span>
                    </div>
                    <p className={`text-taupe font-satoshi text-base leading-relaxed max-w-[45ch] ${isEven ? 'md:ml-auto' : ''}`}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Liquid Glass Visual Anchor */}
                  <div className="w-full md:w-1/2 flex justify-center">
                    <div className="relative group w-48 h-48 md:w-64 md:h-64 flex items-center justify-center">
                      {/* Decorative ring */}
                      <div className="absolute inset-0 border border-sage/20 rounded-full scale-110 group-hover:scale-95 transition-transform duration-700 ease-out" />

                      {/* Liquid Glass Orb */}
                      <div className="w-full h-full rounded-full premium-glass-card border-white/40 flex items-center justify-center text-sage-dark shadow-[inset_0_2px_4px_rgba(255,255,255,0.6)] z-10 group-hover:scale-105 transition-transform duration-500 ease-out">
                        {step.icon}
                      </div>

                      {/* Precise Floating Number */}
                      <div className={`absolute -top-4 premium-glass-dark text-white font-mono text-lg font-bold w-14 h-14 rounded-full flex items-center justify-center shadow-xl z-20 ${isEven ? '-right-4' : '-left-4'}`}>
                        {step.num}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Magnetic Button Call to Action */}
        <div className="mt-32 md:mt-48 flex justify-center pb-10">
          <a
            href="#"
            className="group relative inline-flex items-center justify-center gap-3 bg-charcoal text-cream text-[13px] uppercase tracking-[0.2em] font-bold px-12 py-6 rounded-full overflow-hidden shadow-2xl transition-all active:scale-[0.95]"
          >
            <div className="absolute inset-0 bg-sage-dark translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            <span className="relative z-10 font-satoshi">Jadwalkan Sesi</span>
            <ArrowRight size={18} weight="bold" className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}

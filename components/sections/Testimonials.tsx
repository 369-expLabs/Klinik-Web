"use client";
import { useEffect, useRef } from "react";
import { Quotes } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    initial: "R",
    age: "34 tahun",
    problem: "Anxiety & insomnia kronis",
    quote:
      "Saya tidak percaya awalnya. Tapi sejak sesi pertama, malam itu saya tidur nyenyak untuk pertama kalinya dalam 2 tahun. Sekarang sudah 6 bulan, dan saya tidak pernah kembali ke kondisi lama itu.",
    sessions: "2 sesi",
  },
  {
    initial: "M",
    age: "28 tahun",
    problem: "Trauma masa kecil & depresi",
    quote:
      "Dr. Yuliana benar-benar memahami. Tidak ada yang menghakimi. Setelah sesi kedua, saya merasa seperti beban berton-ton terangkat dari dada saya. Saya akhirnya bisa memaafkan — bukan untuk orang itu, tapi untuk diri saya sendiri.",
    sessions: "3 sesi",
  },
  {
    initial: "S",
    age: "45 tahun",
    problem: "Anger management & hubungan rumah tangga",
    quote:
      "Istri saya yang menyarankan. Saya skeptis — tapi setelah satu sesi, saya sadar ada luka lama yang belum pernah saya akui. Rumah tangga kami sekarang jauh lebih hangat. Anak-anak saya mendapat ayah yang berbeda.",
    sessions: "2 sesi",
  },
  {
    initial: "D",
    age: "31 tahun",
    problem: "Burnout karir & self-sabotage",
    quote:
      "Saya hampir menghancurkan karir yang saya bangun 8 tahun. Di sini saya menemukan akar ketakutan saya pada kesuksesan. Prosesnya tenang, tidak ada paksaan. Terima kasih HOPE.",
    sessions: "4 sesi",
  },
];

export default function Testimonials() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered Spring Motion (Intensity 8)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;

        // Calculate dynamic delay based on column placement simulation to make it feel organic
        const delay = (i % 3) * 0.15;

        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.2,
            delay: delay,
            ease: "elastic.out(1, 0.75)", // Approximating stiffness: 100, damping: 20
            scrollTrigger: {
              trigger: card,
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
    <section id="testimoni" ref={containerRef} className="bg-cream py-32 md:py-48 px-4 md:px-8 relative overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/5 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-24 md:mb-32 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 border border-sage/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-[10px] font-bold text-sage-dark tracking-[0.2em] uppercase font-satoshi">
              Clinical Results
            </span>
          </div>

          <h2 className="font-playfair text-4xl md:text-5xl lg:text-7xl font-bold text-charcoal tracking-tighter leading-none mb-6 max-w-3xl">
            Hidup Mereka{" "}
            <span className="italic text-sage-dark font-normal">Sudah Berubah</span>
          </h2>

          <p className="text-taupe font-satoshi text-lg leading-relaxed max-w-[55ch]">
            Semua testimoni ditulis oleh pasien nyata. Identitas dijaga kerahasiaannya dengan ketat sesuai <strong className="text-charcoal font-medium">kode etik medis</strong>.
          </p>
        </div>

        {/* Asymmetric Masonry Architecture (Variance 8) */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="break-inside-avoid relative" // break-inside-avoid is crucial for pure CSS masonry
            >
              {/* Liquid Glass Materiality container */}
              <div className="premium-glass-card shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] border-white/40 p-8 h-full flex flex-col bg-white/60">

                {/* Phosphor Quotes Accent */}
                <div className="text-sage/40 mb-6">
                  <Quotes size={36} weight="regular" />
                </div>

                <p className="text-base text-charcoal-soft font-satoshi leading-relaxed flex-1 mb-10">
                  {t.quote}
                </p>

                <div className="border-t border-charcoal/5 pt-6 mt-auto">
                  <div className="flex items-center gap-4">

                    {/* Clinical Accuracy Font-Mono Avatar */}
                    <div className="w-10 h-10 rounded-full bg-sage-dark text-cream flex items-center justify-center flex-shrink-0 font-mono font-bold shadow-md">
                      {t.initial}
                    </div>

                    <div className="flex-1">
                      <p className="text-sm font-bold text-charcoal font-satoshi leading-tight mb-0.5">
                        Pasien {t.initial}
                      </p>
                      <p className="text-[11px] text-taupe font-satoshi uppercase tracking-widest font-bold">
                        {t.age} <span className="text-sage/40 mx-1">|</span> {t.problem}
                      </p>
                    </div>

                    <span className="bg-white text-sage-dark border border-sage/10 text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-sm">
                      {t.sessions}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-32 text-center">
          <p className="text-taupe font-satoshi text-base tracking-wide">
            5.000+ pasien lainnya memiliki cerita serupa. <strong className="text-charcoal">Giliran kamu.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

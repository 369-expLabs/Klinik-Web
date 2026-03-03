"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HeartBreak,
  Users,
  MaskHappy,
  ArrowsClockwise
} from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const bentoItems = [
  {
    Icon: HeartBreak,
    title: "Ketakutan Tanpa Alasan",
    desc: "Pernah tiba-tiba takut sesuatu yang buruk akan terjadi, padahal tidak ada alasan logis sama sekali? Jantung berdebar dan pikiran skenario terburuk mengambil alih.",
    colSpan: "md:col-span-8", // 70% width
  },
  {
    Icon: Users,
    title: "Kesepian di Keramaian",
    desc: "Merasa sendirian meski dikelilingi banyak orang — bahkan oleh orang-orang yang paling kamu cintai.",
    colSpan: "md:col-span-4", // 30% width
  },
  {
    Icon: MaskHappy,
    title: "Lelah Berpura-pura",
    desc: "Tersenyum di luar, tapi hancur di dalam. Menghabiskan energi luar biasa setiap hari hanya untuk terlihat 'baik-baik saja' di depan dunia.",
    colSpan: "md:col-span-5", // 40% width
  },
  {
    Icon: ArrowsClockwise,
    title: "Siklus Luka Berulang",
    desc: "Sudah mencoba memaafkan, sudah mencoba melupakan. Tapi rasa sakit itu selalu kembali di saat yang tidak terduga, seolah luka itu tidak pernah benar-benar selesai.",
    colSpan: "md:col-span-7", // 60% width
  },
];

export default function DeeperPain() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation: Spring Physics (Intensity 8)
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.9, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "elastic.out(1, 0.75)", // stiffness ~100, damping ~20 equivalent
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      // Perpetual Macro-Interaction (Floating Icons)
      iconsRef.current.forEach((icon, i) => {
        if (!icon) return;
        gsap.to(icon, {
          y: -8,
          duration: 2 + i * 0.2, // Asymmetric timing
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-sage-dark py-32 md:py-48 px-4 md:px-8 overflow-hidden z-0 relative"
    >
      {/* Background Diffusion Shadow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-sage-light/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* De-slopping Typography: tracking-tighter & leading-[0.9] */}
        <div className="text-center mb-20 md:mb-32">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-sage-light font-satoshi mb-6">
            Jujur pada Diri Sendiri
          </p>
          <h2 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-cream tracking-tighter leading-[0.9] mb-8">
            Apakah Kamu Sedang di{" "}
            <span className="italic text-gold-light block mt-2">Fase Ini?</span>
          </h2>
          <p className="text-sage-light font-satoshi max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Tidak apa-apa jika jawabannya iya. Menyadarinya adalah langkah
            pertama yang paling berani untuk keluar dari siklus ini.
          </p>
        </div>

        {/* Asymmetric Bento Architecture (Variance 8) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
          {bentoItems.map((item, i) => {
            const { Icon } = item;
            return (
              <div
                key={i}
                className={`${item.colSpan} flex flex-col`}
              >
                {/* Visual Container (Liquid Glass) separated from Text */}
                <div
                  ref={(el) => { cardsRef.current[i] = el; }}
                  className="premium-glass-dark rounded-[2.5rem] p-10 lg:p-14 mb-8 flex-grow flex items-center justify-center border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_20px_40px_rgba(0,0,0,0.2)] backdrop-blur-2xl"
                >
                  <div
                    ref={(el) => { iconsRef.current[i] = el; }}
                    className="w-24 h-24 rounded-full bg-charcoal/40 border border-white/5 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] flex items-center justify-center"
                  >
                    <Icon size={48} weight="duotone" className="text-gold-light drop-shadow-lg" />
                  </div>
                </div>

                {/* Typography block placed outside container for gallery aesthetic */}
                <div className="px-4">
                  <h3 className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-4">
                    {item.title}
                  </h3>
                  <p className="text-sage-light font-satoshi text-base leading-relaxed max-w-[45ch]">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

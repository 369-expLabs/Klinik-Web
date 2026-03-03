"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Waves,
  Fire,
  Snowflake,
  MoonStars
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

type Problem = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>;
  title: string;
  desc: string;
};

const problems: Problem[] = [
  {
    Icon: Waves,
    title: "Pikiran Berisik and Cemas",
    desc: "Pikiran tidak bisa berhenti berputar. Khawatir terus-menerus tentang hal yang belum tentu terjadi. Sulit tidur karena kepala penuh.",
  },
  {
    Icon: Fire,
    title: "Emosi Meledak and Menyesal",
    desc: "Marah tiba-tiba tanpa alasan jelas, lalu menyesal. Merasa tidak bisa mengontrol reaksi sendiri. Orang-orang terdekat mulai menjauh.",
  },
  {
    Icon: Snowflake,
    title: "Rumah Tangga Terasa Dingin",
    desc: "Hubungan dengan pasangan terasa kosong. Sering salah paham. Komunikasi sudah tidak nyaman — bahkan menghindari pembicaraan penting.",
  },
  {
    Icon: MoonStars,
    title: "Trauma and Luka Batin",
    desc: "Ada kejadian masa lalu yang terus membayangi. Sudah mencoba melupakannya, tapi rasanya selalu kembali di saat yang tidak terduga.",
  },
];

export default function PainMirror() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered entrance animation for cards
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%", // trigger when top of section hits 75% down viewport
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Anti-Center Bias: Split Screen Header Layout (Skill §3) */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-4">
              Apakah Ini Terasa Familiar?
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-charcoal leading-tight">
              Apa yang Membuat Hidupmu{" "}
              <span className="italic text-sage-dark block mt-1">Terasa Berat?</span>
            </h2>
          </div>
          <div className="max-w-md md:text-right">
            <p className="text-taupe font-satoshi text-base leading-relaxed">
              Kamu tidak sendirian. Jutaan orang merasakan hal yang sama — dan
              banyak dari mereka sudah menemukan jalan keluarnya.
            </p>
          </div>
        </div>

        {/* 2x2 Bento Grid replacing the generic 4-col string (Skill §7) */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((item, i) => {
            const { Icon } = item;
            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                // Asymmetric offset: right column is shifted down for a dynamic layout
                className={`premium-glass-card p-8 lg:p-10 relative ${i % 2 === 1 ? "md:translate-y-12" : ""}`}
              >
                <div className="mb-6 w-14 h-14 rounded-2xl bg-charcoal-soft/5 flex items-center justify-center border border-charcoal-soft/10">
                  <Icon size={28} weight="duotone" className="text-sage-dark" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-charcoal mb-4">
                  {item.title}
                </h3>
                <p className="text-base text-taupe font-satoshi leading-relaxed max-w-[65ch]">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-24 md:mt-32 pt-10 border-t border-charcoal-soft/10 text-center">
          <p className="text-taupe font-satoshi text-sm italic tracking-wide">
            Jika kamu mengangguk membaca salah satu di atas — ini bukan
            kebetulan. Kamu berada di tempat yang tepat.
          </p>
        </div>
      </div>
    </section>
  );
}

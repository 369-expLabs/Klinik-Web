"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const problems = [
  {
    icon: "🌀",
    title: "Pikiran Berisik & Cemas",
    desc: "Pikiran tidak bisa berhenti berputar. Khawatir terus-menerus tentang hal yang belum tentu terjadi. Sulit tidur karena kepala penuh.",
  },
  {
    icon: "💥",
    title: "Emosi Meledak & Menyesal",
    desc: "Marah tiba-tiba tanpa alasan jelas, lalu menyesal. Merasa tidak bisa mengontrol reaksi sendiri. Orang-orang terdekat mulai menjauh.",
  },
  {
    icon: "❄️",
    title: "Rumah Tangga Terasa Dingin",
    desc: "Hubungan dengan pasangan terasa kosong. Sering salah paham. Komunikasi sudah tidak nyaman — bahkan menghindari pembicaraan penting.",
  },
  {
    icon: "🌑",
    title: "Trauma & Luka Batin",
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
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // trigger when top of section hits 80% down viewport
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-3">
            Apakah Ini Terasa Familiar?
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Apa yang Membuat Hidupmu{" "}
            <span className="italic text-sage-dark">Terasa Berat?</span>
          </h2>
          <p className="text-taupe font-inter max-w-xl mx-auto text-base leading-relaxed">
            Kamu tidak sendirian. Jutaan orang merasakan hal yang sama — dan
            banyak dari mereka sudah menemukan jalan keluarnya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`bg-cream rounded-2xl p-7 border border-cream-dark hover:shadow-md transition-shadow duration-200 group ${i % 2 === 0 ? "md:translate-y-10" : ""
                }`}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-playfair text-lg font-semibold text-charcoal mb-3 group-hover:text-sage-dark transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-taupe font-inter leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-taupe font-inter text-sm italic">
            Jika kamu mengangguk membaca salah satu di atas — ini bukan
            kebetulan. Kamu berada di tempat yang tepat.
          </p>
        </div>
      </div>
    </section >
  );
}

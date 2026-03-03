"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Lightning,
  Leaf,
  Stethoscope,
  Brain,
  Sparkle,
  UsersThree,
} from "@phosphor-icons/react";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

type USP = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: React.ComponentType<any>;
  iconWeight: "fill" | "regular" | "bold" | "thin" | "light" | "duotone";
  title: string;
  badge: string;
  desc: string;
};

const usps: USP[] = [
  {
    Icon: Lightning,
    iconWeight: "fill",
    title: "Perubahan Cepat",
    badge: "Paling Dicari",
    desc: "90% pasien merasakan perubahan drastis sejak sesi pertama. Bukan butuh tahunan — cukup 1 hingga 3 sesi untuk sebagian besar masalah.",
  },
  {
    Icon: Leaf,
    iconWeight: "fill",
    title: "100% Tanpa Obat",
    badge: "",
    desc: "Pulih karena kekuatan pikiranmu sendiri yang di-reprogram. Tidak ada ketergantungan kimia. Tubuh dan pikiran menyembuhkan diri secara alami.",
  },
  {
    Icon: Stethoscope,
    iconWeight: "regular",
    title: "Supervisi Dokter Medis",
    badge: "Keunggulan Utama",
    desc: "Dr. Yuliana adalah dokter medis sekaligus hipnoterapis klinis bersertifikat. Diagnosa fisik dan psikosomatis terintegrasi dalam satu layanan.",
  },
  {
    Icon: Brain,
    iconWeight: "fill",
    title: "Tuntas ke Akar Masalah",
    badge: "",
    desc: "Masuk langsung ke 88% pikiran bawah sadar — bukan hanya permukaan. Mencabut file rusak yang menjadi akar semua gejala, permanen.",
  },
  {
    Icon: Sparkle,
    iconWeight: "fill",
    title: "Gejala Fisik Ikut Sembuh",
    badge: "",
    desc: "Saat akar emosional tercabut, gejala fisik seperti GERD, migrain, dan insomnia yang bersumber dari stres otomatis membaik.",
  },
  {
    Icon: UsersThree,
    iconWeight: "fill",
    title: "Komunitas Seumur Hidup",
    badge: "",
    desc: "Setelah terapi, kamu bergabung ke komunitas meditasi HOPE — pendampingan mingguan untuk menjaga stabilitas emosi jangka panjang.",
  },
];

// Vertical offsets per card for asymmetric architectural depth
const offsets = ["md:translate-y-0", "md:translate-y-8", "md:-translate-y-4", "md:translate-y-4", "md:translate-y-0", "md:translate-y-8"];

export default function Solution() {
  const containerRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="layanan" ref={containerRef} className="bg-cream py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Left-aligned section header — split layout (anti-center bias) */}
        <div className="mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
              Mengapa House of Peace
            </p>
            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-charcoal leading-tight max-w-lg">
              Bukan Sekadar Terapi —{" "}
              <span className="italic text-sage-dark">Tuntas dari Akar</span>
            </h2>
          </div>
          <p className="text-taupe font-satoshi max-w-xs text-sm leading-relaxed md:text-right">
            6 keunggulan yang membuat pendekatan kami berbeda dari semua
            solusi yang pernah kamu coba sebelumnya.
          </p>
        </div>

        {/* Asymmetric 2-col zigzag grid — avoids banned 3-col equal layout */}
        <div className="grid md:grid-cols-2 gap-5">
          {usps.map((usp, i) => {
            const { Icon } = usp;
            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className={`premium-glass-card p-8 relative ${offsets[i]}`}
              >
                {usp.badge && (
                  <span className="absolute top-5 right-5 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full font-satoshi">
                    {usp.badge}
                  </span>
                )}
                <Icon size={32} weight={usp.iconWeight} className="text-sage-dark mb-5" />
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                  {usp.title}
                </h3>
                <p className="text-sm text-taupe font-satoshi leading-relaxed">{usp.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

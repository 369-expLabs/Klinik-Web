"use client";
import { useEffect, useRef } from "react";
import { PersonSimpleTaiChi } from "@phosphor-icons/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Pre-Talk",
    duration: "30–60 menit",
    desc: "Sesi perbincangan awal yang hangat dan tanpa penilaian. Kami memahami situasimu, riwayat masalah, dan tujuanmu. Kamu selalu dalam kontrol.",
  },
  {
    num: "02",
    title: "Relaksasi Dalam (Induksi)",
    duration: "30–60 menit",
    desc: "Dipandu untuk mencapai kondisi relaksasi mendalam — gelombang otak Theta. Kamu tetap sadar sepenuhnya, bisa berbicara dan mengakhiri kapan saja.",
  },
  {
    num: "03",
    title: "Reprogramming Bawah Sadar",
    duration: "30–90 menit",
    desc: "Inilah inti terapi. Dengan izinmu, file-file rusak di pikiran bawah sadar diidentifikasi dan di-reprogram. Tidak ada yang dipaksakan.",
  },
  {
    num: "04",
    title: "Lega & Pemahaman Baru",
    duration: "30–60 menit",
    desc: "Kamu kembali ke kesadaran penuh dengan perasaan ringan, lega, dan pemahaman baru. Post-talk membantu mengintegrasikan perubahan.",
  },
];

export default function Process() {
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
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: containerRef.current, start: "top 80%" },
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="proses" ref={containerRef} className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-outfit mb-3">
            Prosesnya Transparan
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Sederhana, Sadar, dan{" "}
            <span className="italic text-sage-dark">Menenangkan</span>
          </h2>
          <p className="text-taupe font-outfit max-w-xl mx-auto text-base leading-relaxed">
            Tidak ada yang misterius. Kamu tidak akan pingsan, tidak akan
            kehilangan kesadaran, dan tidak bisa dipaksa melakukan apa pun
            yang tidak kamu inginkan.
          </p>
        </div>

        {/* Process steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="bg-cream rounded-2xl p-7 border border-cream-dark relative"
            >
              <div className="text-5xl font-playfair font-bold text-sage/20 mb-4">
                {step.num}
              </div>
              <h3 className="font-playfair text-lg font-semibold text-charcoal mb-1">
                {step.title}
              </h3>
              <p className="text-xs text-sage font-outfit font-semibold mb-4 uppercase tracking-wide">
                {step.duration}
              </p>
              <p className="text-sm text-taupe font-outfit leading-relaxed">{step.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 text-sage-light text-xl z-10 transition-transform hover:translate-x-1">
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* After-care community — icon replaces emoji */}
        <div className="bg-sage-dark rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-sage/20 flex items-center justify-center">
            <PersonSimpleTaiChi size={36} weight="fill" className="text-sage-light" />
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage-light font-outfit mb-2">
              Exclusive After-Care
            </p>
            <h3 className="font-playfair text-2xl font-bold text-cream mb-3">
              Komunitas Meditasi HOPE
            </h3>
            <p className="text-sage-light font-outfit text-sm leading-relaxed">
              Setelah sesi selesai, perjalananmu tidak berakhir. Kamu
              bergabung ke komunitas meditasi mingguan bersama pasien HOPE
              lainnya — dipandu oleh tim kami untuk menjaga stabilitas emosi
              dan pertumbuhan jangka panjang. Seumur hidup, tanpa biaya
              tambahan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

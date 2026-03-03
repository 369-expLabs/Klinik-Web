"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const questions = [
  "Pernah tiba-tiba takut sesuatu yang buruk akan terjadi, padahal tidak ada alasan jelas?",
  "Merasa sendirian meski dikelilingi banyak orang — bahkan orang-orang yang kamu cintai?",
  "Sudah lelah pura-pura baik-baik saja, padahal di dalam terasa hancur?",
  "Sudah mencoba memaafkan, tapi rasa sakit itu selalu kembali seolah belum selesai?",
];

export default function DeeperPain() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-sage-dark py-20 md:py-28 px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage-light font-inter mb-3">
            Jujur pada Diri Sendiri
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-4">
            Apakah Kamu Sedang di{" "}
            <span className="italic text-gold-light">Fase Ini?</span>
          </h2>
          <p className="text-sage-light font-inter max-w-xl mx-auto text-base leading-relaxed">
            Tidak apa-apa jika jawabannya iya. Menyadarinya adalah langkah
            pertama yang paling berani.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((q, i) => (
            <div
              key={i}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="premium-glass-dark flex items-start gap-4 px-7 py-5"
            >
              <span className="min-w-8 h-8 rounded-full bg-gold/20 text-gold-light flex items-center justify-center text-sm font-bold font-inter mt-0.5 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-cream font-inter text-base leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        {/* Closing reassurance card */}
        <div
          className="premium-glass-dark mt-10 p-6 text-center"
        >
          <p className="text-gold-light font-playfair text-xl font-semibold mb-2">
            Kamu tidak sedang lemah.
          </p>
          <p className="text-sage-light font-inter text-sm leading-relaxed">
            Pikiran bawah sadar kamu sedang mencoba melindungimu dari luka lama
            — dengan cara yang tidak lagi membantu. Itulah yang ingin kita
            selesaikan bersama.
          </p>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { WhatsappLogo, ArrowRight } from "@phosphor-icons/react";

gsap.registerPlugin(ScrollTrigger);

const WA_NUMBER = "6281234567890"; // TODO: replace with real number
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin konsultasi tentang terapi di House of Peace."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

// Framer Motion Variants - High Agency Stagger (Skill Rule)
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

// Framer Motion Spring Physics (stiffness: 100, damping: 20)
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Setup Parallax for badges (Liquid Glass floats)
    const ctx = gsap.context(() => {
      badgesRef.current.forEach((badge) => {
        if (!badge) return;
        gsap.to(badge, {
          yPercent: -15, // Move upwards relative to its own height
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

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[100dvh] bg-cream flex items-center overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      {/* Asymmetric layout container: increased left padding, right side leaks outside boundary */}
      <div className="w-full pl-6 md:pl-16 lg:pl-32 pr-0 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left: Copy & CTA */}
          <motion.div
            className="w-full md:w-1/2 relative z-30 pr-6 md:pr-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Social proof bar */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-3 bg-cream-dark border border-cream-dark rounded-full px-4 py-2 mb-8">
              <span className="text-xs font-semibold text-sage-dark tracking-wide font-geist uppercase">
                5.000+ Pasien Telah Pulih
              </span>
              <span className="text-taupe-light">·</span>
              <span className="text-xs text-taupe font-geist">Dipercaya Dokter & Psikolog</span>
            </motion.div>

            {/* Premium Typography: tracking-tighter, leading-[0.9] */}
            <motion.h1
              variants={itemVariants}
              className="font-playfair text-5xl md:text-6xl lg:text-[5rem] font-bold text-charcoal tracking-tighter leading-[0.9] mb-8 text-balance"
            >
              Bebaskan Diri dari{" "}
              <span className="text-sage-dark italic">Trauma & Emosi</span>{" "}
              yang Menyandera Hidupmu
            </motion.h1>

            {/* Max paragraph width capped at 65ch */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg text-taupe font-geist leading-relaxed mb-10 max-w-[65ch]"
            >
              Selesaikan masalah mental & perilaku langsung ke akarnya.{" "}
              <strong className="text-charcoal font-medium">Cepat, permanen, 100% tanpa obat.</strong>{" "}
              90% pasien merasakan perubahan sejak sesi pertama.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4">
              {/* Tactile Feedback Buttons via Framer Motion */}
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-forest text-cream font-medium px-8 py-4 rounded-full transition-colors duration-300 font-geist text-sm shadow-md hover:shadow-glow"
              >
                <WhatsappLogo size={20} weight="regular" />
                Konsultasikan Masalah Saya
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#proses"
                className="inline-flex items-center justify-center gap-2 border border-sage text-charcoal font-medium px-8 py-4 rounded-full transition-colors duration-200 hover:bg-sage/10 font-geist text-sm"
              >
                Pelajari Prosesnya <ArrowRight size={18} weight="regular" />
              </motion.a>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-6 mt-12 pt-8 border-t border-cream-dark/50">
              {[
                "100% Tanpa Obat",
                "Supervisi Dokter Medis",
                "Rahasia Terjamin",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-sage-dark flex items-center justify-center text-white text-[10px]">✓</span>
                  <span className="text-xs text-taupe font-geist font-medium">{badge}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Illustration placeholder (Overlapping right boundary) */}
          <motion.div
            className="w-full md:w-1/2 lg:w-[55%] relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <div className="relative w-full aspect-[4/3] md:aspect-square bg-cream-dark rounded-l-3xl md:rounded-l-[3rem] overflow-hidden border-l border-t border-b border-cream-dark shadow-2xl">
              <Image
                src="/illustrations/hero.jpg"
                alt="Bebaskan diri dari trauma — wanita merasakan kebebasan di alam terbuka"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Liquid Glass Badge 1 — Light Refraction */}
            <div
              ref={(el) => { badgesRef.current[0] = el; }}
              className="premium-glass-card absolute bottom-12 -left-8 md:-left-12 px-6 py-5 z-30 shadow-2xl rounded-2xl"
            >
              <p className="text-3xl font-bold font-playfair text-charcoal leading-none mb-1">90%</p>
              <p className="text-xs text-taupe font-geist">Merasakan perubahan<br />sejak sesi pertama</p>
            </div>

            {/* Liquid Glass Badge 2 — Dark Refraction */}
            <div
              ref={(el) => { badgesRef.current[1] = el; }}
              className="premium-glass-dark absolute top-12 right-12 px-6 py-5 z-30 shadow-2xl rounded-2xl"
            >
              <p className="text-3xl font-bold font-playfair text-cream leading-none mb-1">5.000+</p>
              <p className="text-xs text-sage-light font-geist">Pasien telah pulih</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

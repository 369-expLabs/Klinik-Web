"use client";
import { useState, useEffect } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";

const WA_NUMBER = "6281234567890"; // TODO: replace with real number
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin konsultasi tentang terapi di House of Peace."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 w-full z-50 flex justify-center px-4 pointer-events-none">
        {/* Transformasi menjadi Floating Pill saat di-scroll dengan Framer Motion */}
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "85%" : "100%",
            maxWidth: scrolled ? "1024px" : "1280px",
            y: scrolled ? -8 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 30,
            mass: 1,
          }}
          className={`pointer-events-auto transition-colors duration-500
            ${scrolled
              ? "premium-glass-card shadow-lg py-3 px-6 md:px-8 rounded-full border border-white/40"
              : "bg-transparent border-transparent py-4 px-2"}`}
        >
          <div className="flex items-center justify-between w-full">

            {/* Logo - Anti Slop Typography */}
            <div className="flex flex-col">
              <span className="font-playfair text-xl md:text-2xl font-bold text-charcoal tracking-tighter leading-none mb-0.5">
                House of Peace
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-taupe font-bold leading-none hidden sm:block">
                Clinical Hypnotherapy
              </span>
            </div>

            {/* Desktop Links - Spacing mathematically perfect */}
            <div className="hidden md:flex items-center gap-10">
              {["Layanan", "Proses", "Testimoni"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal/60 hover:text-charcoal transition-colors font-satoshi">
                  {item}
                </a>
              ))}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-charcoal text-cream text-[11px] uppercase tracking-[0.2em] font-bold px-8 py-3 rounded-full active:scale-[0.95] transition-transform font-satoshi shadow-md hover:bg-charcoal-light"
              >
                Booking
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              className="md:hidden text-charcoal outline-none active:scale-[0.95] transition-transform"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} weight="regular" /> : <List size={24} weight="regular" />}
            </button>

          </div>
        </motion.nav>
      </div>

      {/* Mobile menu - Dropdown Menu Glass with Framer Motion */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-24 left-4 right-4 z-40 premium-glass-card rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden border border-white/40"
          >
            {["layanan", "proses", "testimoni", "faq"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-base text-charcoal-soft hover:text-charcoal font-satoshi capitalize font-medium py-3 border-b border-charcoal-soft/10 last:border-0 tracking-wide"
              >
                {item}
              </a>
            ))}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-charcoal text-cream text-[13px] tracking-[0.2em] uppercase font-bold px-6 py-4 rounded-full text-center font-satoshi mt-3 active:scale-[0.95] transition-transform shadow-md"
              onClick={() => setOpen(false)}
            >
              <WhatsappLogo size={18} weight="regular" />
              Booking Sekarang
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

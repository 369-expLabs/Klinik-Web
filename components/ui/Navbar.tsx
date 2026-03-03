"use client";
import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

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
      {/* Transformasi menjadi Floating Pill saat di-scroll */}
      <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-[95%] max-w-7xl
        ${scrolled ? "top-4" : "top-6"}`}>

        <div className={`flex items-center justify-between px-6 md:px-8 py-4 transition-all duration-500
          ${scrolled
            ? "premium-glass-card shadow-lg py-3 rounded-full"
            : "bg-transparent border-transparent"}`}>

          {/* Logo - Anti Slop Typography */}
          <div className="flex flex-col">
            <span className="font-playfair text-xl font-bold text-charcoal tracking-tighter leading-none mb-0.5">House of Peace</span>
            <span className="text-[9px] uppercase tracking-[0.3em] text-taupe font-bold leading-none">Clinical Hypnotherapy</span>
          </div>

          {/* Desktop Links - Spacing mathematically perfect */}
          <div className="hidden md:flex items-center gap-10">
            {["Layanan", "Proses", "Testimoni"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[11px] uppercase tracking-widest font-bold text-charcoal/60 hover:text-charcoal transition-colors font-satoshi">
                {item}
              </a>
            ))}
            <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="bg-charcoal text-cream text-[11px] uppercase tracking-widest font-bold px-8 py-3 rounded-full active:scale-[0.95] transition-transform font-satoshi shadow-md hover:bg-charcoal-light">
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
      </nav>

      {/* Mobile menu - Dropdown Menu Glass */}
      {open && (
        <div className="fixed top-24 left-4 right-4 z-40 premium-glass-card rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden border border-white/40">
          {["#layanan", "#proses", "#testimoni", "#faq"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-base text-charcoal-soft hover:text-charcoal font-satoshi capitalize font-medium py-3 border-b border-charcoal-soft/10 last:border-0"
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-cream text-base font-semibold px-6 py-4 rounded-full text-center font-satoshi mt-3 active:scale-[0.95] transition-transform shadow-md"
            onClick={() => setOpen(false)}
          >
            Booking Sekarang
          </a>
        </div>
      )}
    </>
  );
}

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
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
        {/* Floating Liquid Glass Pill */}
        <div
          className={`premium-glass-card w-full max-w-5xl rounded-full px-6 transition-all duration-500 flex items-center justify-between ${scrolled ? "py-4 shadow-xl bg-white/70" : "py-5 shadow-sm bg-white/40"
            }`}
        >
          {/* Logo */}
          <div className="flex flex-col leading-none">
            <span className="font-playfair text-xl md:text-2xl font-bold text-charcoal tracking-tight">
              House of Peace
            </span>
            <span className="text-[10px] text-taupe tracking-widest uppercase font-satoshi hidden sm:block mt-1">
              Hypnotherapy & Wellness
            </span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#layanan" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi font-medium">
              Layanan
            </a>
            <a href="#proses" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi font-medium">
              Proses
            </a>
            <a href="#testimoni" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi font-medium">
              Testimoni
            </a>
            <a href="#faq" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi font-medium">
              FAQ
            </a>

            {/* High-Agency CTA with Tactile Feedback */}
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-forest text-cream text-sm font-semibold px-7 py-3 rounded-full hover:bg-forest-light transition-all active:scale-[0.98] font-satoshi shadow-md"
            >
              Booking Sekarang
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
            className="bg-forest text-cream text-base font-semibold px-6 py-4 rounded-full text-center font-satoshi mt-3 active:scale-[0.98] transition-all shadow-md"
            onClick={() => setOpen(false)}
          >
            Booking Sekarang
          </a>
        </div>
      )}
    </>
  );
}

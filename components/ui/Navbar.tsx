"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex flex-col leading-tight">
          <span className="font-playfair text-xl font-bold text-charcoal">
            House of Peace
          </span>
          <span className="text-xs text-taupe tracking-widest uppercase font-satoshi">
            Hypnotherapy & Wellness
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#layanan" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi">
            Layanan
          </a>
          <a href="#proses" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi">
            Proses
          </a>
          <a href="#testimoni" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi">
            Testimoni
          </a>
          <a href="#faq" className="text-sm text-charcoal-soft hover:text-charcoal transition-colors font-satoshi">
            FAQ
          </a>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gold-light transition-colors font-satoshi"
          >
            Booking Sekarang
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-charcoal"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-cream border-t border-cream-dark px-4 py-6 flex flex-col gap-4">
          {["#layanan", "#proses", "#testimoni", "#faq"].map((href) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm text-charcoal-soft font-satoshi capitalize"
            >
              {href.replace("#", "").charAt(0).toUpperCase() + href.slice(2)}
            </a>
          ))}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gold text-charcoal text-sm font-semibold px-6 py-3 rounded-full text-center font-satoshi mt-2"
          >
            Booking Sekarang
          </a>
        </div>
      )}
    </nav>
  );
}

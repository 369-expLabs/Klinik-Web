"use client";
import { useState, useEffect } from "react";
import { List, X, WhatsappLogo } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { waUrl } from "@/lib/config";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Tentang Kami", href: "/tentang-kami" },
  { label: "Layanan", href: "/layanan" },
  { label: "Blog", href: "/blog" },
  { label: "Kontak", href: "/kontak" },
];

export default function NavbarCP() {
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
        <motion.nav
          initial={false}
          animate={{
            width: scrolled ? "90%" : "100%",
            maxWidth: scrolled ? "1100px" : "1280px",
            y: scrolled ? -8 : 0,
          }}
          transition={{ type: "spring", stiffness: 200, damping: 30, mass: 1 }}
          className={`pointer-events-auto transition-colors duration-500
            ${scrolled
              ? "premium-glass-card shadow-lg py-3 px-6 md:px-8 rounded-full border border-white/40"
              : "bg-transparent border-transparent py-4 px-2"}`}
        >
          <div className="flex items-center justify-between w-full">

            {/* Logo */}
            <Link href="/" className="flex flex-col">
              <span className="font-playfair text-xl md:text-2xl font-bold text-charcoal tracking-tighter leading-none mb-0.5">
                House of Peace
              </span>
              <span className="text-[9px] uppercase tracking-[0.3em] text-taupe font-bold leading-none hidden sm:block">
                Clinical Hypnotherapy
              </span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[11px] uppercase tracking-[0.2em] font-bold text-charcoal/60 hover:text-charcoal transition-colors font-satoshi"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={waUrl("Halo, saya ingin booking sesi hypnotherapy di House of Peace.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-charcoal text-cream text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full active:scale-[0.95] transition-transform font-satoshi shadow-md hover:bg-charcoal-soft"
              >
                <WhatsappLogo size={14} weight="fill" />
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

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-24 left-4 right-4 z-40 premium-glass-card rounded-3xl p-6 flex flex-col gap-4 shadow-2xl md:hidden border border-white/40"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-charcoal-soft hover:text-charcoal font-satoshi font-medium py-3 border-b border-charcoal-soft/10 last:border-0 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={waUrl("Halo, saya ingin booking sesi hypnotherapy di House of Peace.")}
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

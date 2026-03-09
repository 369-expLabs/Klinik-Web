// UPDATED: uses lib/config.ts + CP navigation links
import Link from "next/link";
import { SITE_CONFIG, waUrl } from "@/lib/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream pt-24 pb-12 md:pt-32 md:pb-16 px-4 md:px-8 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sage/5 rounded-full blur-[150px] pointer-events-none translate-x-1/3 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-16 mb-24 md:mb-32">

          {/* Brand */}
          <div className="flex flex-col">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-6 tracking-tighter leading-none">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-sm md:text-base text-taupe-light leading-relaxed font-satoshi max-w-[40ch]">
              Hypnotherapy and Wellness Center<br />
              <span className="block mt-4 text-cream font-medium">Jakarta Barat 11520</span>
              Kedoya Utara, Kebon Jeruk
            </p>
          </div>

          {/* Layanan */}
          <div className="flex flex-col">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-sage-light mb-6 font-satoshi">
              Layanan
            </p>
            <ul className="space-y-4 text-sm text-taupe-light font-satoshi">
              {["Individual Hypnotherapy", "Konsultasi Online", "Komunitas Meditasi HOPE"].map((item) => (
                <li key={item}>
                  <Link href="/layanan" className="inline-block transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:text-cream">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-sage-light mb-6 font-satoshi">
              Perusahaan
            </p>
            <ul className="space-y-4 text-sm text-taupe-light font-satoshi">
              <li><Link href="/tentang-kami" className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-cream">Tentang Kami</Link></li>
              <li><Link href="/tentang-kami#dokter" className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-cream">Dr. Yuliana</Link></li>
              <li><Link href="/kontak" className="inline-block transition-transform duration-300 hover:translate-x-1 hover:text-cream">Kontak</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col">
            <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-sage-light mb-6 font-satoshi">
              Booking & Konsultasi
            </p>
            <p className="text-sm text-taupe-light font-satoshi leading-relaxed mb-6">
              WhatsApp tim kami tersedia untuk konsultasi awal dan penjadwalan. Membalas dalam 1×24 jam.
            </p>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sage-light font-satoshi text-sm font-semibold hover:text-white hover:translate-x-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]"
            >
              Hubungi via WA &rarr;
            </a>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-taupe font-satoshi font-medium tracking-wide">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="w-1.5 h-1.5 rounded-full bg-sage/30"></span>
            <p className="text-[11px] text-taupe font-satoshi font-medium tracking-wide uppercase">
              Kerahasiaan Medis Dijaga
            </p>
            <span className="w-1.5 h-1.5 rounded-full bg-sage/30"></span>
          </div>
        </div>
      </div>
    </footer>
  );
}

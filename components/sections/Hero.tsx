"use client";
import { useEffect, useState } from "react";

const WA_NUMBER = "6281234567890"; // TODO: replace with real number
const WA_MESSAGE = encodeURIComponent(
  "Halo, saya ingin konsultasi tentang terapi di House of Peace."
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-screen bg-cream flex items-center overflow-hidden">
      {/* Decorative background blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sage/10 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/8 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-32 pb-20 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div
            className={`transition-all duration-700 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Social proof bar */}
            <div className="inline-flex items-center gap-3 bg-cream-dark border border-cream-dark rounded-full px-4 py-2 mb-8">
              <span className="text-xs font-semibold text-sage-dark tracking-wide font-dm uppercase">
                5.000+ Pasien Telah Pulih
              </span>
              <span className="text-taupe-light">·</span>
              <span className="text-xs text-taupe font-dm">Dipercaya Dokter & Psikolog</span>
            </div>

            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight mb-6 text-balance">
              Bebaskan Diri dari{" "}
              <span className="text-sage-dark italic">Trauma & Emosi</span>{" "}
              yang Menyandera Hidupmu
            </h1>

            <p className="text-base md:text-lg text-taupe font-dm leading-relaxed mb-8 max-w-lg">
              Selesaikan masalah mental & perilaku langsung ke akarnya.{" "}
              <strong className="text-charcoal">Cepat, permanen, 100% tanpa obat.</strong>{" "}
              90% pasien merasakan perubahan sejak sesi pertama.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-semibold px-8 py-4 rounded-full transition-all duration-200 font-dm text-sm shadow-md hover:shadow-lg"
              >
                {/* WhatsApp icon */}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Konsultasikan Masalah Saya
              </a>
              <a
                href="#proses"
                className="inline-flex items-center justify-center gap-2 border-2 border-sage text-charcoal font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:bg-sage/10 font-dm text-sm"
              >
                Pelajari Prosesnya →
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-cream-dark">
              {[
                "100% Tanpa Obat",
                "Supervisi Dokter Medis",
                "Rahasia Terjamin",
              ].map((badge) => (
                <div key={badge} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-sage-dark flex items-center justify-center text-white text-xs">✓</span>
                  <span className="text-xs text-taupe font-dm font-medium">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Illustration placeholder */}
          <div
            className={`transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative">
              {/* Illustration placeholder — replace with actual <Image> from client */}
              <div className="w-full aspect-square bg-cream-dark rounded-3xl flex items-center justify-center border border-cream-dark overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-sage/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-12 h-12 text-sage-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="text-taupe font-dm text-sm">
                    Ilustrasi terapi akan ditampilkan di sini
                  </p>
                  <p className="text-taupe-light font-dm text-xs mt-1">
                    Ganti dengan: /public/illustrations/hero.png
                  </p>
                </div>
              </div>
              {/* Floating stat card */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-4 border border-cream-dark">
                <p className="text-2xl font-bold font-playfair text-charcoal">90%</p>
                <p className="text-xs text-taupe font-dm">Merasakan perubahan<br/>sejak sesi pertama</p>
              </div>
              <div className="absolute -top-4 -right-4 bg-sage-dark rounded-2xl shadow-lg px-5 py-4">
                <p className="text-2xl font-bold font-playfair text-cream">5.000+</p>
                <p className="text-xs text-sage-light font-dm">Pasien telah pulih</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

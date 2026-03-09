"use client";
import { Check, WhatsappLogo, ArrowRight } from "@phosphor-icons/react";
import { waUrl } from "@/lib/config";

const WA_URL = waUrl("Halo Dr. Yuliana, saya ingin booking sesi hipnoterapi di House of Peace. Boleh saya tahu jadwal yang tersedia?");

const included = [
  "Sesi Pre-Talk (30–60 menit) — konsultasi awal mendalam",
  "Hipnoterapi klinis (1–3 jam) — inti proses penyembuhan",
  "Post-Talk (30–60 menit) — integrasi dan pemahaman",
  "Akses komunitas meditasi HOPE — pendampingan seumur hidup",
  "Supervisi dokter medis — diagnosa terintegrasi",
];

export default function Booking() {
  return (
    <section id="booking" className="bg-charcoal relative py-32 md:py-48 px-4 md:px-8 overflow-hidden">
      {/* Soft sage green gradient aura for the Ethereal Glassmorphism background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20 md:mb-24">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
            Mulai Dari Sini
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream mb-4">
            Satu Langkah Pertama Menuju{" "}
            <span className="italic text-sage-light">Hidup yang Tenang</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-stretch">
          {/* Primary High-Impact Card (Glassmorphism) */}
          <div className="lg:col-span-3 premium-glass-dark p-8 md:p-16 relative overflow-hidden flex flex-col justify-between">
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-sage-light font-satoshi mb-4">
                Investasi Kesehatan Mental
              </p>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-playfair text-4xl md:text-5xl font-bold text-cream tracking-tighter leading-none">
                  Rp 1 – 3 Juta
                </span>
                <span className="text-sage-light font-satoshi text-base">/ sesi</span>
              </div>
              <p className="text-taupe-light font-satoshi text-sm md:text-base leading-relaxed mb-12 max-w-[45ch]">
                Biaya bervariasi sesuai kompleksitas kasus. Konsultasi awal untuk menentukan estimasi sesi yang dibutuhkan.
              </p>

              <div className="grid gap-6 mb-16">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-sage/20 rounded-full p-1 mt-0.5 flex-shrink-0 text-sage-light">
                      <Check size={14} weight="bold" />
                    </div>
                    <span className="text-sm md:text-base text-white/90 font-satoshi leading-relaxed max-w-[45ch]">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full flex items-center justify-center gap-3 bg-forest hover:bg-forest-light text-cream font-semibold py-4 md:py-5 rounded-2xl transition-all font-satoshi text-base shadow-[0_4px_24px_rgba(33,67,38,0.4)] active:scale-[0.98]"
            >
              <WhatsappLogo size={22} weight="regular" />
              Book via WhatsApp Sekarang
            </a>
          </div>

          {/* Side-Car: Operational Data and Uncertainty Box */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Operational Data */}
            <div className="bg-charcoal/50 border border-white/5 rounded-3xl p-8 md:p-12 space-y-10 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-forest/20 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-4">
                  Lokasi Klinik
                </p>
                <p className="font-satoshi text-sm text-taupe-light leading-relaxed">
                  <span className="block text-cream font-medium mb-1">Jakarta Barat 11520</span>
                  Kedoya Utara, Kebon Jeruk<br />
                  <span className="block mt-2 text-xs">Tersedia parkir yang luas. Dapat dijangkau dengan kendaraan pribadi maupun ojek online dengan mudah.</span>
                </p>
              </div>

              <div className="h-px w-full bg-transparent relative z-10" />

              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-4">
                  Jam Operasional
                </p>
                <div className="space-y-3 text-sm text-taupe-light font-satoshi">
                  <div className="flex justify-between items-center">
                    <span>Senin &ndash; Jumat</span>
                    <span className="font-medium text-cream">09.00 &ndash; 18.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Sabtu</span>
                    <span className="font-medium text-cream">09.00 &ndash; 15.00 WIB</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Minggu / Libur</span>
                    <span className="text-sage-dark italic">Tutup</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Uncertainty Box */}
            <div className="bg-sage/5 border border-sage/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
              <h3 className="font-playfair text-xl font-semibold text-cream mb-3">
                Tidak yakin apakah ini tepat untukmu?
              </h3>
              <p className="text-taupe-light font-satoshi text-sm md:text-base leading-relaxed mb-8 max-w-[45ch]">
                Silakan konsultasikan terlebih dahulu via WhatsApp &mdash; gratis dan tanpa komitmen sama sekali. Kami bantu untuk menemukan jalan yang tepat.
              </p>
              <a
                href={waUrl("Halo, saya ingin bertanya dulu sebelum memutuskan booking.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cream font-satoshi text-sm font-semibold hover:text-white transition-colors group"
              >
                Tanya Dulu via WA
                <ArrowRight size={16} weight="bold" className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

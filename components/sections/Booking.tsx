const WA_NUMBER = "6281234567890"; // TODO: replace with real number
const WA_MESSAGE = encodeURIComponent(
  "Halo Dr. Yuliana, saya ingin booking sesi hipnoterapi di House of Peace. Boleh saya tahu jadwal yang tersedia?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;

const included = [
  "Sesi Pre-Talk (30–60 menit) — konsultasi awal mendalam",
  "Hipnoterapi klinis (1–3 jam) — inti proses penyembuhan",
  "Post-Talk (30–60 menit) — integrasi dan pemahaman",
  "Akses komunitas meditasi HOPE — pendampingan seumur hidup",
  "Supervisi dokter medis — diagnosa terintegrasi",
];

export default function Booking() {
  return (
    <section id="booking" className="bg-charcoal relative py-20 md:py-28 px-4 md:px-8 overflow-hidden border-t border-white/5">
      {/* Soft sage green gradient aura for the Ethereal Glassmorphism background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-3">
            Mulai Dari Sini
          </p>
          <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream mb-4">
            Satu Langkah Pertama Menuju{" "}
            <span className="italic text-sage-light">Hidup yang Tenang</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-stretch">
          {/* Primary High-Impact Card (Glassmorphism) */}
          <div className="lg:col-span-3 premium-glass-dark p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            {/* Inner subtle glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-widest uppercase text-sage-light font-inter mb-4">
                Investasi Kesehatan Mental
              </p>

              <div className="mb-2 flex items-baseline gap-2">
                <span className="font-playfair text-4xl md:text-5xl font-bold text-cream">
                  Rp 1 – 3 Juta
                </span>
                <span className="text-sage-light font-inter text-base">/ sesi</span>
              </div>
              <p className="text-taupe-light font-inter text-sm mb-10">
                Biaya bervariasi sesuai kompleksitas kasus. Konsultasi awal untuk menentukan estimasi sesi yang dibutuhkan.
              </p>

              <div className="space-y-4 mb-10">
                {included.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="bg-sage/20 rounded-full p-1 mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-sage-light">
                        <polyline points="20 6 9 17 4 12" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <span className="text-sm text-white font-inter leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 w-full flex items-center justify-center gap-3 bg-forest hover:bg-forest-light text-cream font-semibold py-4 md:py-5 rounded-2xl transition-all font-inter text-base shadow-[0_0_20px_rgba(33,67,38,0.5)] animate-[pulseGlow_2.5s_ease-in-out_infinite]"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Book via WhatsApp Sekarang
            </a>
          </div>

          {/* Side-Car: Operational Data & Uncertainty Box */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            {/* Operational Data */}
            <div className="bg-charcoal border border-white/5 rounded-3xl p-8 space-y-8 flex-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-forest/20 rounded-full blur-3xl pointer-events-none" />
              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-4">
                  Lokasi Klinik
                </p>
                <p className="font-inter text-sm text-taupe-light leading-relaxed">
                  <span className="block text-cream font-medium mb-1">Jakarta Barat 11520</span>
                  Kedoya Utara, Kebon Jeruk<br />
                  <span className="block mt-2 text-xs">Tersedia parkir yang luas. Dapat dijangkau dengan kendaraan pribadi maupun ojek online dengan mudah.</span>
                </p>
              </div>

              <div className="h-px w-full bg-white/5 relative z-10" />

              <div className="relative z-10">
                <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-4">
                  Jam Operasional
                </p>
                <div className="space-y-3 text-sm text-taupe-light font-inter">
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
            <div className="bg-sage/10 border border-sage/20 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="font-playfair text-xl font-semibold text-cream mb-3">
                Tidak yakin apakah ini tepat untukmu?
              </h3>
              <p className="text-sage-light font-inter text-sm leading-relaxed mb-6">
                Silakan konsultasikan terlebih dahulu via WhatsApp &mdash; gratis dan tanpa komitmen sama sekali. Kami bantu untuk menemukan jalan yang tepat.
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya dulu sebelum memutuskan booking.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-inter text-sm font-semibold hover:text-gold-light transition-colors group"
              >
                Tanya Dulu via WA
                <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

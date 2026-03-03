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
    <section className="bg-cream py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-3">
            Mulai Dari Sini
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Satu Langkah Pertama Menuju{" "}
            <span className="italic text-sage-dark">Hidup yang Tenang</span>
          </h2>
          <p className="text-taupe font-dm max-w-xl mx-auto text-base leading-relaxed">
            Tidak ada komitmen jangka panjang. Cukup mulai dengan satu sesi —
            dan rasakan sendiri perbedaannya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Pricing card */}
          <div className="bg-charcoal rounded-3xl p-8 md:p-10">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-2">
              Investasi Kesehatan Mental
            </p>
            <div className="mb-6">
              <span className="font-playfair text-4xl font-bold text-cream">
                Rp 1 – 3 Juta
              </span>
              <span className="text-sage-light font-dm text-sm ml-2">/ sesi</span>
            </div>
            <p className="text-taupe-light font-dm text-xs mb-8 leading-relaxed">
              Biaya bervariasi sesuai kompleksitas kasus. Konsultasi awal untuk
              menentukan estimasi sesi yang dibutuhkan.
            </p>

            <p className="text-xs font-semibold tracking-widest uppercase text-gold font-dm mb-4">
              Sudah Termasuk
            </p>
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-cream/80 font-dm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1DA850] text-white font-semibold py-4 rounded-2xl transition-colors font-dm text-sm"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Book via WhatsApp Sekarang
            </a>
          </div>

          {/* Info + location */}
          <div className="space-y-6">
            <div className="bg-cream-dark rounded-2xl p-6 border border-cream-dark">
              <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-4">
                Lokasi Klinik
              </p>
              <p className="font-dm text-sm text-charcoal-soft leading-relaxed">
                📍 Kedoya Utara, Kebon Jeruk<br />
                Jakarta Barat 11520<br /><br />
                Tersedia parkir. Dapat dijangkau dengan kendaraan pribadi maupun ojek online.
              </p>
            </div>

            <div className="bg-cream-dark rounded-2xl p-6 border border-cream-dark">
              <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-4">
                Jam Operasional
              </p>
              <div className="space-y-2 text-sm text-charcoal-soft font-dm">
                <div className="flex justify-between">
                  <span>Senin – Jumat</span>
                  <span className="font-semibold">09.00 – 18.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Sabtu</span>
                  <span className="font-semibold">09.00 – 15.00 WIB</span>
                </div>
                <div className="flex justify-between">
                  <span>Minggu & Libur</span>
                  <span className="text-taupe">Tutup</span>
                </div>
              </div>
            </div>

            <div className="bg-sage-dark rounded-2xl p-6">
              <p className="font-playfair text-lg font-semibold text-cream mb-2">
                Tidak yakin apakah ini tepat untukmu?
              </p>
              <p className="text-sage-light font-dm text-sm leading-relaxed mb-4">
                Konsultasikan terlebih dahulu via WhatsApp — gratis, tanpa
                komitmen. Kami akan membantu kamu memutuskan apakah hipnoterapi
                adalah pilihan yang tepat.
              </p>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent("Halo, saya ingin bertanya dulu sebelum memutuskan booking.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-dm text-sm font-semibold hover:text-gold-light transition-colors"
              >
                Tanya dulu via WA →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

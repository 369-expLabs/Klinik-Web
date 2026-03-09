import NavbarCP from "@/components/ui/NavbarCP";
import Footer from "@/components/ui/Footer";
import { SITE_CONFIG, waUrl } from "@/lib/config";

const faqs = [
  {
    q: "Apakah hypnotherapy aman?",
    a: "Ya, sepenuhnya aman. Anda tidak akan kehilangan kesadaran atau kontrol. Hypnotherapy adalah kondisi relaksasi mendalam di mana Anda tetap sadar dan bisa mengakhiri sesi kapan saja.",
  },
  {
    q: "Berapa sesi yang dibutuhkan?",
    a: "90% klien merasakan perubahan signifikan sejak sesi pertama. Rata-rata 1–3 sesi untuk sebagian besar masalah. Kasus kompleks mungkin memerlukan lebih banyak sesi.",
  },
  {
    q: "Apakah bisa dilakukan secara online?",
    a: "Ya. Konsultasi online via video call sama efektifnya dengan tatap muka. Yang dibutuhkan hanya koneksi internet stabil dan ruangan yang tenang.",
  },
  {
    q: "Berapa biaya per sesi?",
    a: "Biaya bervariasi tergantung jenis layanan dan durasi. Hubungi kami via WhatsApp untuk informasi harga terkini dan paket yang tersedia.",
  },
];

export default function KontakPage() {
  return (
    <main className="overflow-x-hidden bg-cream">
      <NavbarCP />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-20 md:pt-56 md:pb-28 px-4 md:px-8 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-sage/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sage font-satoshi mb-6">
            Hubungi Kami
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-charcoal leading-none tracking-tighter mb-8 max-w-2xl">
            Langkah Pertama Selalu{" "}
            <span className="italic text-sage-dark">Paling Sulit</span>
          </h1>
          <p className="text-taupe font-satoshi text-lg leading-relaxed max-w-xl">
            Kami mengerti. Tidak mudah untuk mengakui bahwa ada sesuatu yang perlu diselesaikan.
            Tapi Anda sudah ada di sini — dan itu sudah luar biasa.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ───────────────────────────────── */}
      <section className="py-4 pb-24 md:pb-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20">

          {/* Left — CTA cards */}
          <div className="space-y-6">
            {/* WA Primary CTA */}
            <div className="bg-charcoal rounded-3xl p-8 md:p-10">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage font-satoshi mb-4">
                Cara Tercepat
              </p>
              <h2 className="font-playfair text-2xl md:text-3xl font-bold text-cream mb-4 tracking-tighter">
                Langsung via WhatsApp
              </h2>
              <p className="text-taupe-light font-satoshi text-sm leading-relaxed mb-8">
                Tim kami membalas dalam 1×24 jam. Ceritakan situasi Anda — tidak perlu
                formal. Konsultasi awal gratis dan tanpa komitmen.
              </p>
              <a
                href={waUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-cream text-charcoal font-satoshi text-[12px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:bg-cream-dark transition-colors w-full justify-center"
              >
                Chat Sekarang
              </a>
            </div>

            {/* Location */}
            <div className="bg-cream-dark rounded-3xl p-8 border border-charcoal/8">
              <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage font-satoshi mb-4">
                Lokasi Klinik
              </p>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-2">{SITE_CONFIG.name}</h3>
              <p className="text-taupe font-satoshi text-sm leading-relaxed mb-4">
                {SITE_CONFIG.address}
              </p>
              <p className="text-xs text-taupe/70 font-satoshi">
                Detail alamat lengkap dikirimkan setelah konfirmasi booking via WhatsApp.
              </p>
            </div>
          </div>

          {/* Right — FAQ */}
          <div>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-sage font-satoshi mb-8">
              Pertanyaan Umum
            </p>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-charcoal/10 pb-6 last:border-0">
                  <h3 className="font-satoshi font-bold text-charcoal text-base mb-3">{faq.q}</h3>
                  <p className="font-satoshi text-sm text-taupe leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-charcoal/10">
              <p className="text-sm text-taupe font-satoshi leading-relaxed">
                Punya pertanyaan lain? Tidak ada pertanyaan yang terlalu kecil atau terlalu aneh.
                Kami ada untuk menjawab.
              </p>
              <a
                href={waUrl("Halo, saya punya pertanyaan tentang layanan House of Peace.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sage-dark font-satoshi text-sm font-bold mt-4 hover:text-charcoal transition-colors"
              >
                Tanya via WA &rarr;
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

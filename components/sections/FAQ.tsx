"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Masalah saya sudah bertahun-tahun. Apakah bisa benar-benar sembuh?",
    a: "Ya — dan ini yang paling sering ditanyakan. Bayangkan handphone yang lambat karena penuh dengan aplikasi lama yang tidak terpakai. Hipnoterapi bekerja seperti membersihkan aplikasi-aplikasi itu langsung dari sumbernya. Tidak peduli berapa lama masalah itu ada — yang penting adalah apakah 'file'-nya sudah dicabut. Itulah yang kami lakukan di setiap sesi.",
  },
  {
    q: "Apakah saya akan pingsan atau tidak sadar selama terapi?",
    a: "Tidak. Ini miskonsepsi terbesar tentang hipnoterapi. Kamu tetap sadar sepenuhnya selama proses berlangsung — bisa mendengar, berbicara, dan mengakhiri sesi kapan saja kamu mau. Hipnoterapi klinis bukan sihir atau pertunjukan panggung. Ini adalah kondisi relaksasi mendalam yang kamu kendalikan sepenuhnya.",
  },
  {
    q: "Apakah hipnoterapi aman secara agama?",
    a: "100% aman. Hipnoterapi klinis yang kami praktikkan adalah pendekatan psikologi berbasis ilmu pengetahuan — bukan okultisme, bukan klenik, dan tidak ada hubungannya dengan hal-hal supranatural. Banyak pasien kami yang taat beragama, dan mereka tidak menemukan pertentangan apapun. Kami dengan senang hati mendiskusikan kekhawatiran ini sebelum memulai.",
  },
  {
    q: "Apakah kerahasiaan saya terjamin?",
    a: "Sepenuhnya. Kami terikat kode etik kerahasiaan medis yang sama dengan dokter dan psikolog. Tidak ada informasi yang akan dibagikan ke siapapun tanpa izin eksplisit dari kamu. Bahkan anggota keluarga yang merujukmu pun tidak mendapat informasi tanpa persetujuanmu.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-3">
            Pertanyaan Umum
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Sebelum Kamu{" "}
            <span className="italic text-sage-dark">Memutuskan</span>
          </h2>
          <p className="text-taupe font-dm text-base leading-relaxed">
            Pertanyaan-pertanyaan ini wajar dan sering ditanyakan. Kami
            menjawabnya dengan jujur.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-cream rounded-2xl border border-cream-dark overflow-hidden"
            >
              <button
                className="w-full text-left px-7 py-5 flex items-start justify-between gap-4 hover:bg-cream-dark/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-dm text-sm font-semibold text-charcoal leading-relaxed pr-4">
                  {faq.q}
                </span>
                <span className="text-sage-dark text-xl flex-shrink-0 mt-0.5 font-dm">
                  {open === i ? "−" : "+"}
                </span>
              </button>
              {open === i && (
                <div className="px-7 pb-6">
                  <p className="text-sm text-taupe font-dm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-taupe font-dm text-sm">
            Masih ada pertanyaan lain?{" "}
            <a
              href={`https://wa.me/6281234567890?text=${encodeURIComponent("Halo, saya ingin bertanya sebelum booking terapi.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage-dark font-semibold underline underline-offset-2 hover:text-charcoal transition-colors"
            >
              Tanyakan langsung via WhatsApp →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

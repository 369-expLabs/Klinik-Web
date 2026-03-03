const testimonials = [
  {
    initial: "R****",
    age: "34 tahun",
    problem: "Anxiety & insomnia kronis",
    quote:
      "Saya tidak percaya awalnya. Tapi sejak sesi pertama, malam itu saya tidur nyenyak untuk pertama kalinya dalam 2 tahun. Sekarang sudah 6 bulan, dan saya tidak pernah kembali ke kondisi lama itu.",
    sessions: "2 sesi",
  },
  {
    initial: "M****",
    age: "28 tahun",
    problem: "Trauma masa kecil & depresi",
    quote:
      "Dr. Yuliana benar-benar memahami. Tidak ada yang menghakimi. Setelah sesi kedua, saya merasa seperti beban berton-ton terangkat dari dada saya. Saya akhirnya bisa memaafkan — bukan untuk orang itu, tapi untuk diri saya sendiri.",
    sessions: "3 sesi",
  },
  {
    initial: "S****",
    age: "45 tahun",
    problem: "Anger management & hubungan rumah tangga",
    quote:
      "Istri saya yang menyarankan. Saya skeptis — tapi setelah satu sesi, saya sadar ada luka lama yang belum pernah saya akui. Rumah tangga kami sekarang jauh lebih hangat. Anak-anak saya mendapat ayah yang berbeda.",
    sessions: "2 sesi",
  },
];

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-cream py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-3">
            Mereka Sudah Merasakannya
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Hidup Mereka{" "}
            <span className="italic text-sage-dark">Sudah Berubah</span>
          </h2>
          <p className="text-taupe font-inter max-w-xl mx-auto text-base leading-relaxed">
            Semua testimoni ditulis oleh pasien nyata. Identitas dijaga
            kerahasiaannya sesuai kode etik medis.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-cream-dark rounded-2xl p-7 border border-cream-dark flex flex-col"
            >
              <div className="text-3xl text-sage/30 font-playfair mb-4 leading-none">"</div>
              <p className="text-sm text-charcoal-soft font-inter leading-relaxed italic flex-1 mb-6">
                {t.quote}
              </p>
              <div className="border-t border-cream-dark pt-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-charcoal font-inter">{t.initial}</p>
                    <p className="text-xs text-taupe font-inter">{t.age} · {t.problem}</p>
                  </div>
                  <span className="bg-sage/10 text-sage-dark text-xs font-semibold px-3 py-1 rounded-full font-inter">
                    {t.sessions}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-taupe font-inter text-sm">
            5.000+ pasien lainnya memiliki cerita serupa. Giliran kamu.
          </p>
        </div>
      </div>
    </section>
  );
}

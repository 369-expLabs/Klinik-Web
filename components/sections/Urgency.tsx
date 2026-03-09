const impacts = [
  {
    category: "Dampak Fisik",
    color: "bg-amber-50 border-amber-200",
    headingColor: "text-amber-800",
    items: [
      "GERD and masalah pencernaan kronis",
      "Migrain and sakit kepala berulang",
      "Insomnia — sulit tidur nyenyak",
      "Sistem imun melemah, mudah sakit",
    ],
  },
  {
    category: "Dampak Hubungan",
    color: "bg-rose-50 border-rose-200",
    headingColor: "text-rose-800",
    items: [
      "Jarak emosional dengan pasangan and anak",
      "Luka batin yang menular ke generasi berikut",
      "Kehilangan kepercayaan orang terdekat",
      "Isolasi sosial tanpa disadari",
    ],
  },
  {
    category: "Dampak Karir and Finansial",
    color: "bg-slate-50 border-slate-200",
    headingColor: "text-slate-800",
    items: [
      "Brain fog — sulit fokus and produktif",
      "Menghambat promosi and potensi",
      "Belanja impulsif untuk mengisi kekosongan",
      "Mengambil keputusan penting dalam kondisi tidak stabil",
    ],
  },
];

export default function Urgency() {
  return (
    <section className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
            Harga Menunda Terlalu Tinggi
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Tubuhmu Sudah Memberi{" "}
            <span className="italic text-sage-dark">Sinyal</span>
          </h2>
          <p className="text-taupe font-satoshi max-w-xl mx-auto text-base leading-relaxed">
            Beban emosional yang tidak diselesaikan tidak hilang sendiri.
            Ia menyebar — ke tubuh, ke hubungan, ke karir. Ini bukan soal
            lebay atau kurang bersyukur. Ini soal biologi.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {impacts.map((group, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border ${group.color}`}
            >
              <p className={`text-xs font-bold uppercase tracking-widest font-satoshi mb-5 ${group.headingColor}`}>
                {group.category}
              </p>
              <ul className="space-y-3">
                {group.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="text-taupe mt-0.5 flex-shrink-0">•</span>
                    <span className="text-sm text-charcoal-soft font-satoshi leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-charcoal rounded-3xl p-8 md:p-10 text-center">
          <p className="font-playfair text-2xl md:text-3xl text-cream font-bold mb-3">
            Setiap hari yang ditunda adalah sehari lagi{" "}
            <span className="text-gold italic">hidup di bawah kapasitasmu.</span>
          </p>
          <p className="text-taupe-light font-satoshi text-sm leading-relaxed max-w-lg mx-auto">
            Bukan karena kamu malas. Tapi karena 88% energimu dipakai untuk
            bertahan dari rasa sakit lama — bukan untuk hidup sepenuhnya.
          </p>
        </div>
      </div>
    </section>
  );
}

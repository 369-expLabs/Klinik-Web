const usps = [
  {
    icon: "⚡",
    title: "Perubahan Cepat",
    badge: "Paling Dicari",
    desc: "90% pasien merasakan perubahan drastis sejak sesi pertama. Bukan butuh tahunan — cukup 1 hingga 3 sesi untuk sebagian besar masalah.",
  },
  {
    icon: "🌿",
    title: "100% Tanpa Obat",
    badge: "",
    desc: "Pulih karena kekuatan pikiranmu sendiri yang di-reprogram. Tidak ada ketergantungan kimia. Tubuh dan pikiran menyembuhkan diri secara alami.",
  },
  {
    icon: "🏥",
    title: "Supervisi Dokter Medis",
    badge: "Keunggulan Utama",
    desc: "Dr. Yuliana adalah dokter medis sekaligus hipnoterapis klinis bersertifikat. Diagnosa fisik dan psikosomatis terintegrasi dalam satu layanan.",
  },
  {
    icon: "🌊",
    title: "Tuntas ke Akar Masalah",
    badge: "",
    desc: "Masuk langsung ke 88% pikiran bawah sadar — bukan hanya permukaan. Mencabut 'file rusak' yang menjadi akar semua gejala, permanen.",
  },
  {
    icon: "✨",
    title: "Gejala Fisik Ikut Sembuh",
    badge: "",
    desc: "Saat akar emosional tercabut, gejala fisik seperti GERD, migrain, dan insomnia yang bersumber dari stres otomatis membaik.",
  },
  {
    icon: "🤝",
    title: "Komunitas Seumur Hidup",
    badge: "",
    desc: "Setelah terapi, kamu bergabung ke komunitas meditasi HOPE — pendampingan mingguan untuk menjaga stabilitas emosi jangka panjang.",
  },
];

export default function Solution() {
  return (
    <section id="layanan" className="bg-cream py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-3">
            Mengapa House of Peace
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Bukan Sekadar Terapi —{" "}
            <span className="italic text-sage-dark">Tuntas dari Akar</span>
          </h2>
          <p className="text-taupe font-dm max-w-xl mx-auto text-base leading-relaxed">
            6 keunggulan yang membuat pendekatan kami berbeda dari semua
            solusi yang pernah kamu coba sebelumnya.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <div
              key={i}
              className="bg-cream-dark rounded-2xl p-7 border border-cream-dark hover:border-sage/40 hover:shadow-md transition-all duration-200 relative"
            >
              {usp.badge && (
                <span className="absolute top-4 right-4 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full font-dm">
                  {usp.badge}
                </span>
              )}
              <div className="text-3xl mb-4">{usp.icon}</div>
              <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">
                {usp.title}
              </h3>
              <p className="text-sm text-taupe font-dm leading-relaxed">{usp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const old_ways = [
  "Hanya menyentuh 12% pikiran sadar — akarnya tidak pernah tersentuh",
  "Butuh berbulan-bulan, bahkan bertahun-tahun tanpa kepastian",
  "Ketergantungan obat kimia yang harus diminum terus-menerus",
  "Setelah sesi selesai — tidak ada follow-up, kamu ditinggal sendiri",
  "Tidak bisa menangani dampak fisik (GERD, migrain, insomnia)",
];

const hope_ways = [
  "Langsung ke 88% pikiran bawah sadar — mencabut akar masalah selamanya",
  "90% pasien merasakan perubahan drastis sejak sesi pertama",
  "100% tanpa obat — pulih karena kekuatan pikiranmu sendiri",
  "Komunitas meditasi mingguan seumur hidup — kamu tidak pernah sendirian",
  "Supervisi dokter medis — diagnosa fisik & psikosomatis terintegrasi",
];

export default function Agitation() {
  return (
    <section className="bg-cream py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-3">
            Mengapa Cara Lama Gagal
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-4">
            Kenapa Masalahmu{" "}
            <span className="italic text-sage-dark">Selalu Kambuh?</span>
          </h2>
          <p className="text-taupe font-dm max-w-xl mx-auto text-base leading-relaxed">
            Bukan karena kamu tidak cukup berusaha. Tapi karena cara yang kamu
            gunakan selama ini hanya menyentuh permukaan — bukan akarnya.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-cream-dark shadow-sm">
          {/* Old way */}
          <div className="bg-[#FFF5F5] p-8 md:p-10">
            <p className="text-xs font-bold tracking-widest uppercase text-red-400 font-dm mb-6">
              ❌ Cara Lama
            </p>
            <ul className="space-y-4">
              {old_ways.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-red-300 mt-0.5 flex-shrink-0 text-lg">✗</span>
                  <span className="text-sm text-red-900/70 font-dm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* HOPE way */}
          <div className="bg-sage-dark p-8 md:p-10">
            <p className="text-xs font-bold tracking-widest uppercase text-gold font-dm mb-6">
              ✓ House of Peace
            </p>
            <ul className="space-y-4">
              {hope_ways.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0 text-lg">✓</span>
                  <span className="text-sm text-cream/90 font-dm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="font-playfair text-xl text-charcoal italic">
            "Masalahnya bukan di kamu — masalahnya ada di{" "}
            <span className="text-sage-dark">file lama di pikiran bawah sadar</span>{" "}
            yang belum pernah dihapus."
          </p>
        </div>
      </div>
    </section>
  );
}

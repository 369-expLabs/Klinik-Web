import NavbarCP from "@/components/ui/NavbarCP";
import Footer from "@/components/ui/Footer";
import { waUrl } from "@/lib/config";

const layanan = [
  {
    id: "01",
    name: "Individual Hypnotherapy",
    tag: "Paling Populer",
    duration: "2–3 jam per sesi",
    price: "Konsultasi untuk harga",
    desc: "Sesi satu-satu dengan Dr. Yuliana. Menangani akar masalah emosional, trauma, kecemasan, fobia, dan pola pikir negatif yang sudah lama menetap. Ini adalah layanan inti House of Peace.",
    outcomes: [
      "Trauma masa lalu yang sudah terpendam bertahun-tahun",
      "Kecemasan kronis, panic attack, dan serangan fobia",
      "Pola sabotase diri yang terus berulang",
      "Masalah fisik psikosomatis: GERD, migrain, insomnia",
      "Kesulitan hubungan interpersonal dan kepercayaan diri",
    ],
  },
  {
    id: "02",
    name: "Konsultasi Online",
    tag: "",
    duration: "90–120 menit per sesi",
    price: "Konsultasi untuk harga",
    desc: "Sesi hypnotherapy via video call untuk klien yang tidak bisa hadir langsung. Efektivitas setara dengan sesi tatap muka — yang penting koneksi internet stabil dan ruangan yang tenang.",
    outcomes: [
      "Fleksibel dari kota mana pun di Indonesia",
      "Privasi lebih terjaga tanpa perlu keluar rumah",
      "Cocok untuk klien dengan mobilitas terbatas",
      "Follow-up sesi setelah terapi awal tatap muka",
    ],
  },
  {
    id: "03",
    name: "Komunitas Meditasi HOPE",
    tag: "Gratis untuk eks-klien",
    duration: "Mingguan, seumur hidup",
    price: "Gratis untuk klien aktif",
    desc: "Setelah terapi selesai, perjalanan Anda tidak berhenti. Komunitas meditasi HOPE mengadakan sesi mingguan untuk menjaga stabilitas emosi, mencegah relaps, dan terus bertumbuh bersama.",
    outcomes: [
      "Sesi meditasi terpandu setiap minggu",
      "Komunitas sesama eks-klien yang saling mendukung",
      "Akses langsung ke Dr. Yuliana untuk pertanyaan ringan",
      "Materi edukasi kesehatan mental berkala",
    ],
  },
];

const steps = [
  { num: "01", title: "Pre-Talk", dur: "30–60 menit", desc: "Perbincangan awal yang hangat, tanpa penilaian. Kami memahami situasi, riwayat, dan tujuan Anda sepenuhnya sebelum apapun dimulai." },
  { num: "02", title: "Relaksasi Dalam (Induksi)", dur: "30–60 menit", desc: "Dipandu ke kondisi relaksasi mendalam — gelombang otak Theta. Anda tetap sadar penuh dan bisa mengakhiri kapan saja." },
  { num: "03", title: "Reprogramming Bawah Sadar", dur: "30–90 menit", desc: "Inti terapi. File-file rusak di pikiran bawah sadar diidentifikasi dan di-reprogram. Tidak ada yang dipaksakan, selalu dengan izin Anda." },
  { num: "04", title: "Integrasi & Post-Talk", dur: "30–60 menit", desc: "Kembali ke kesadaran penuh dengan rasa ringan dan lega. Post-talk membantu mengintegrasikan perubahan ke kehidupan sehari-hari." },
];

export default function LayananPage() {
  return (
    <main className="overflow-x-hidden bg-cream">
      <NavbarCP />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
        <div className="absolute top-0 left-[-5%] w-[60vw] h-[60vw] bg-sage/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sage font-satoshi mb-6">
            Layanan Kami
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-none tracking-tighter mb-8 max-w-3xl">
            Pilih Jalan{" "}
            <span className="italic text-sage-dark">Pemulihan Anda</span>
          </h1>
          <p className="text-taupe font-satoshi text-lg md:text-xl leading-relaxed max-w-2xl">
            Setiap layanan dirancang untuk satu tujuan: mencabut akar masalah, bukan sekadar
            meredam gejala. Dipimpin langsung oleh Dr. Yuliana, CHt® — dokter medis sekaligus
            hipnoterapis klinis bersertifikat.
          </p>
        </div>
      </section>

      {/* ── LAYANAN CARDS ─────────────────────────────────── */}
      <section className="bg-cream py-4 md:py-8 px-4 md:px-8 pb-24 md:pb-32">
        <div className="max-w-6xl mx-auto space-y-8">
          {layanan.map((l) => (
            <div key={l.id} className="bg-cream-dark rounded-3xl p-8 md:p-12 border border-charcoal/8 grid md:grid-cols-[1fr_1.5fr] gap-8 md:gap-16">
              {/* Left */}
              <div>
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-sage/60">{l.id}</span>
                  {l.tag && (
                    <span className="bg-gold/20 text-charcoal text-[10px] font-bold px-3 py-1 rounded-full font-satoshi uppercase tracking-widest">
                      {l.tag}
                    </span>
                  )}
                </div>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-charcoal mb-3 tracking-tighter">
                  {l.name}
                </h2>
                <p className="text-xs text-sage font-satoshi font-semibold uppercase tracking-widest mb-2">{l.duration}</p>
                <p className="text-xs text-taupe font-satoshi mb-6">{l.price}</p>
                <p className="text-sm text-taupe font-satoshi leading-relaxed mb-8">{l.desc}</p>
                <a
                  href={waUrl(`Halo, saya ingin tahu lebih lanjut tentang layanan ${l.name} di House of Peace.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-charcoal text-cream font-satoshi text-[11px] uppercase tracking-[0.2em] font-bold px-6 py-3 rounded-full hover:bg-charcoal-soft transition-colors"
                >
                  Tanya via WA
                </a>
              </div>

              {/* Right — outcomes */}
              <div>
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-sage font-satoshi mb-5">
                  Cocok Untuk
                </p>
                <ul className="space-y-4">
                  {l.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage-dark mt-2 flex-shrink-0" />
                      <span className="text-sm text-charcoal/80 font-satoshi leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROSES TERAPI ─────────────────────────────────── */}
      <section className="bg-charcoal py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14 text-center">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
              Bagaimana Sesi Berjalan
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream tracking-tighter">
              Proses yang{" "}
              <span className="italic text-gold-light">Transparan & Aman</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="bg-charcoal-soft/40 rounded-2xl p-6 border border-white/8 hover:border-sage/30 transition-colors">
                <span className="font-mono text-2xl font-bold text-sage/30 block mb-4">{s.num}</span>
                <h3 className="font-playfair text-lg font-semibold text-cream mb-1">{s.title}</h3>
                <p className="text-xs text-sage font-satoshi font-semibold uppercase tracking-widest mb-4">{s.dur}</p>
                <p className="text-sm text-taupe-light font-satoshi leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <p className="font-playfair text-xl text-cream/80 italic mb-8 max-w-2xl mx-auto">
              "Anda selalu dalam kontrol penuh. Tidak ada yang terjadi tanpa izin eksplisit Anda — ini bukan hipnosis panggung."
            </p>
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cream text-charcoal font-satoshi text-[12px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:bg-cream-dark transition-colors"
            >
              Mulai Konsultasi Gratis
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

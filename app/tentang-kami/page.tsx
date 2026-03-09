import NavbarCP from "@/components/ui/NavbarCP";
import Footer from "@/components/ui/Footer";
import { SITE_CONFIG, waUrl } from "@/lib/config";
import { UserCircle } from "@phosphor-icons/react/dist/ssr";

// Credentials dokter — update dengan data asli
const credentials = [
  "Dokter Medis — Sarjana Kedokteran Universitas Indonesia",
  "Certified Hypnotherapist (CHt®) — tersertifikasi internasional",
  "Clinical Hypnotherapist — klinis bersertifikat",
  "Pembicara di 50+ seminar kesehatan mental nasional",
  "Dipercaya oleh dokter, psikolog, dan psikiater untuk rujukan pasien",
];

const mediaLogos = [
  "Detikcom", "TV One", "Pertamina", "Kemenhub RI",
  "Kompas", "Liputan6", "RCTI", "Metro TV",
  "Republika", "Bisnis Indonesia",
];

// Nilai dan filosofi HOPE
const values = [
  {
    title: "Kerahasiaan Penuh",
    desc: "Setiap sesi bersifat sangat privat. Tidak ada informasi yang dibagikan ke pihak luar tanpa izin eksplisit Anda. Ini bukan sekadar janji — ini etika medis yang kami jaga.",
  },
  {
    title: "Pendekatan Berbasis Bukti",
    desc: "Hypnotherapy klinis bukan sugesti buta. Kami menggabungkan neurosains, psikologi kognitif, dan teknik hipnosis terstandar internasional untuk hasil yang terukur.",
  },
  {
    title: "Tanpa Penghakiman",
    desc: "Setiap orang datang dengan cerita yang berbeda. Di House of Peace, tidak ada yang perlu malu atau takut dihakimi. Anda aman untuk jujur sepenuhnya.",
  },
  {
    title: "Komunitas Jangka Panjang",
    desc: "Terapi bukan titik akhir. Setelah sesi, Anda bergabung ke komunitas meditasi HOPE — pendampingan mingguan untuk menjaga stabilitas emosi seumur hidup.",
  },
];

export default function TentangKamiPage() {
  return (
    <main className="overflow-x-hidden bg-cream">
      <NavbarCP />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative pt-48 pb-28 md:pt-56 md:pb-36 px-4 md:px-8 overflow-hidden">
        {/* Ambient orb */}
        <div className="absolute top-0 right-[-10%] w-[70vw] h-[70vw] bg-sage/8 rounded-full blur-[160px] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <p className="text-xs font-bold tracking-[0.3em] uppercase text-sage font-satoshi mb-6">
            Tentang House of Peace
          </p>
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-none tracking-tighter mb-8 max-w-3xl">
            Tempat di Mana{" "}
            <span className="italic text-sage-dark">Pikiran Menemukan Damai</span>
          </h1>
          <p className="text-taupe font-satoshi text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            House of Peace adalah klinik hypnotherapy dan wellness center yang didirikan
            dengan satu keyakinan: setiap masalah emosional dan mental memiliki akar,
            dan akar itu bisa dicabut secara tuntas — tanpa obat, tanpa bertahun-tahun terapi.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={waUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-charcoal text-cream font-satoshi text-[12px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:bg-charcoal-soft transition-colors"
            >
              Mulai Konsultasi
            </a>
            <a
              href="#dokter"
              className="border border-charcoal/20 text-charcoal font-satoshi text-[12px] uppercase tracking-[0.2em] font-bold px-8 py-4 rounded-full hover:border-charcoal/40 transition-colors"
            >
              Kenali Dokter Kami
            </a>
          </div>
        </div>
      </section>

      {/* ── KENAPA HOPE BERBEDA (from Agitation content) ── */}
      <section className="bg-charcoal py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
              Mengapa Kami Berbeda
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-4">
              Bukan Terapi Biasa —{" "}
              <span className="italic text-gold-light">Tuntas dari Akar</span>
            </h2>
            <p className="text-taupe-light font-satoshi max-w-xl mx-auto text-base leading-relaxed">
              Bukan karena Anda tidak cukup berusaha. Tapi karena cara yang ada selama
              ini hanya menyentuh permukaan — bukan akar masalahnya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-charcoal-soft">
            {/* Cara Lama */}
            <div className="bg-charcoal-soft/50 p-8 md:p-10">
              <p className="text-xs font-bold tracking-widest uppercase text-red-400 font-satoshi mb-6">
                ❌ Pendekatan Konvensional
              </p>
              <ul className="space-y-4">
                {[
                  "Hanya menyentuh 12% pikiran sadar — akarnya tidak pernah tersentuh",
                  "Butuh berbulan-bulan, bahkan bertahun-tahun tanpa kepastian",
                  "Ketergantungan obat kimia yang harus diminum terus-menerus",
                  "Setelah sesi selesai — tidak ada follow-up, Anda ditinggal sendiri",
                  "Tidak bisa menangani dampak fisik (GERD, migrain, insomnia)",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    <span className="text-sm text-taupe-light font-satoshi leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* House of Peace */}
            <div className="bg-sage-dark p-8 md:p-10">
              <p className="text-xs font-bold tracking-widest uppercase text-gold font-satoshi mb-6">
                ✓ House of Peace
              </p>
              <ul className="space-y-4">
                {[
                  "Langsung ke 88% pikiran bawah sadar — mencabut akar masalah selamanya",
                  "90% pasien merasakan perubahan drastis sejak sesi pertama",
                  "100% tanpa obat — pulih karena kekuatan pikiran Anda sendiri",
                  "Komunitas meditasi mingguan seumur hidup — Anda tidak pernah sendirian",
                  "Supervisi dokter medis — diagnosa fisik dan psikosomatis terintegrasi",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-cream/90 font-satoshi leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── DOKTER ────────────────────────────────────────── */}
      <section id="dokter" className="bg-cream py-20 md:py-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

            {/* Photo */}
            <div className="flex justify-center md:justify-start">
              <div className="w-72 h-80 md:w-80 md:h-96 rounded-3xl bg-sage/10 border border-sage/20 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 rounded-full bg-sage/20 mx-auto mb-4 flex items-center justify-center">
                    <UserCircle size={48} weight="thin" className="text-sage-dark" />
                  </div>
                  <p className="text-sage text-xs font-satoshi">
                    Foto {SITE_CONFIG.doctor.name}<br />
                    <span className="text-sage/60 text-[10px]">Ganti: /public/dr-yuliana.jpg</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-4">
                Ditangani Langsung Oleh
              </p>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal mb-2 tracking-tighter">
                {SITE_CONFIG.doctor.name}
              </h2>
              <p className="text-gold font-satoshi text-sm mb-6 font-semibold">
                {SITE_CONFIG.doctor.title}
              </p>
              <p className="text-taupe font-satoshi text-base leading-relaxed mb-8">
                Dengan latar belakang medis dan spesialisasi hipnoterapi klinis,
                {" "}{SITE_CONFIG.doctor.name.split(",")[0]} memberikan pendekatan yang unik: menangani masalah
                mental dan emosional sekaligus mengidentifikasi dampak fisiknya.
                Inilah yang tidak bisa dilakukan hipnoterapis tanpa latar belakang medis.
              </p>

              <ul className="space-y-3 mb-10">
                {credentials.map((c, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-sage-dark mt-0.5 flex-shrink-0 font-bold">✓</span>
                    <span className="text-sm text-charcoal/80 font-satoshi leading-relaxed">{c}</span>
                  </li>
                ))}
              </ul>

              {/* Media logos */}
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-sage font-satoshi mb-4">
                Diliput Oleh
              </p>
              <div className="flex flex-wrap gap-2">
                {mediaLogos.map((logo) => (
                  <span key={logo} className="text-xs text-taupe font-satoshi bg-cream-dark px-3 py-1.5 rounded-full border border-charcoal/10">
                    {logo}
                  </span>
                ))}
                <span className="text-xs text-taupe/60 font-satoshi px-3 py-1.5">+10 lainnya</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── VALUES ────────────────────────────────────────── */}
      <section className="bg-cream-dark py-20 md:py-28 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-14">
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-satoshi mb-3">
              Nilai & Filosofi
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-charcoal tracking-tighter max-w-xl">
              Apa yang Kami{" "}
              <span className="italic text-sage-dark">Pegang Teguh</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {values.map((v, i) => (
              <div key={i} className="bg-cream rounded-2xl p-8 border border-charcoal/8 hover:border-sage/30 transition-colors">
                <span className="font-mono text-xs text-sage/60 mb-4 block">0{i + 1}</span>
                <h3 className="font-playfair text-xl font-semibold text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-taupe font-satoshi leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

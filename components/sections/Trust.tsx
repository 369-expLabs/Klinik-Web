const mediaLogos = [
  "Detikcom", "TV One", "Pertamina", "Kemenhub RI",
  "Kompas", "Liputan6", "RCTI", "Metro TV",
  "Republika", "Bisnis Indonesia", "SWA", "Femina",
  "Okezone", "Tribun News", "IDN Times", "Kumparan",
  "Halodoc", "Alodokter", "Grid.ID", "Viva.co.id",
];

const credentials = [
  "Dokter Medis — Sarjana Kedokteran Universitas Indonesia",
  "Certified Hypnotherapist (CHt®) — tersertifikasi internasional",
  "Clinical Hypnotherapist — klinis bersertifikat",
  "Pembicara di 50+ seminar kesehatan mental nasional",
  "Dipercaya oleh dokter, psikolog, dan psikiater untuk rujukan pasien",
];

export default function Trust() {
  return (
    <section className="bg-charcoal py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dr. Yuliana */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo placeholder */}
          <div className="flex justify-center">
            <div className="w-72 h-72 rounded-3xl bg-charcoal-soft border border-sage/20 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 rounded-full bg-sage/20 mx-auto mb-3 flex items-center justify-center">
                  <span className="text-3xl">👩‍⚕️</span>
                </div>
                <p className="text-sage-light text-xs font-dm">
                  Foto Dr. Yuliana<br />
                  <span className="text-sage/60">Ganti: /public/dr-yuliana.jpg</span>
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-3">
              Ditangani Langsung Oleh
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-2">
              Dr. Yuliana, CHt®
            </h2>
            <p className="text-gold font-dm text-sm mb-6">
              Medical Doctor & Clinical Hypnotherapist
            </p>

            <p className="text-taupe-light font-dm text-sm leading-relaxed mb-7">
              Dengan latar belakang medis dan spesialisasi hipnoterapi klinis,
              Dr. Yuliana memberikan pendekatan yang unik: menangani masalah
              mental dan emosional sekaligus mengidentifikasi dampak fisiknya.
              Inilah yang tidak bisa dilakukan hipnoterapis tanpa latar
              belakang medis.
            </p>

            <ul className="space-y-3">
              {credentials.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-sm text-cream/80 font-dm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* AS SEEN ON */}
        <div className="border-t border-charcoal-soft pt-16">
          <p className="text-center text-xs font-semibold tracking-widest uppercase text-sage font-dm mb-10">
            Dipercaya & Diliput Oleh
          </p>
          <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-10 gap-4">
            {mediaLogos.map((logo, i) => (
              <div
                key={i}
                className="bg-charcoal-soft rounded-xl px-3 py-3 flex items-center justify-center border border-sage/10 hover:border-sage/30 transition-colors"
              >
                <span className="text-xs text-taupe font-dm text-center leading-tight">
                  {logo}
                </span>
              </div>
            ))}
          </div>
          <p className="text-center text-sage text-xs font-dm mt-6">
            + 20 media nasional lainnya
          </p>
        </div>
      </div>
    </section>
  );
}

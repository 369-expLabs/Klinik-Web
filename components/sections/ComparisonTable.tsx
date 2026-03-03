export default function ComparisonTable() {
    const oldWay = [
        "Fokus menghilangkan gejala sementara",
        "Sering butuh obat menahun",
        "Sesi berlarut-larut (bulanan/tahunan)",
        "Hanya bicara di permukaan sadar",
        "Terasa berat dan sering drop setelahnya",
    ];

    const hopeWay = [
        "Tuntas cabut akar di pikiran bawah sadar",
        "100% rilis emosi alami tanpa obat",
        "Perubahan drastis dalam 1–3 sesi (90% pasien)",
        "Reprogramming sel saraf langsung ke pemicu",
        "Dibekali after-care komunitas seumur hidup",
    ];

    return (
        <section className="bg-charcoal py-20 md:py-28 px-4 md:px-8 overflow-hidden relative">
            {/* Decorative blurred background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-forest/20 blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-16">
                    <p className="text-xs font-semibold tracking-widest uppercase text-sage font-inter mb-3">
                        Pilihan Ada di Tanganmu
                    </p>
                    <h2 className="font-playfair text-3xl md:text-5xl font-bold text-cream mb-4">
                        Berhenti Berputar di <span className="italic text-gold-light">Lingkaran yang Sama</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 relative gap-8 md:gap-0 mt-8">
                    {/* Blurred Gradient Divider (Desktop only) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sage-light/30 to-transparent -translate-x-1/2" />

                    {/* The Old Way */}
                    <div className="p-8 md:p-12 md:pr-16 text-center md:text-right">
                        <h3 className="font-playfair text-2xl text-sage mb-8">Cara Lama</h3>
                        <ul className="space-y-6">
                            {oldWay.map((item, i) => (
                                <li key={i} className="text-taupe-light font-inter text-sm md:text-base">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* House of Peace Way (Glassmorphism) */}
                    <div className="p-8 md:p-12 md:pl-16 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl md:rounded-l-none md:rounded-r-3xl relative overflow-hidden group hover:bg-white/10 transition-colors duration-500">
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10 text-center md:text-left">
                            <h3 className="font-playfair text-2xl text-gold-light mb-8">Bersama House of Peace</h3>
                            <ul className="space-y-6">
                                {hopeWay.map((item, i) => (
                                    <li key={i} className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4 text-cream font-inter text-sm md:text-base font-medium">
                                        <span className="text-forest-light bg-gold-light/20 p-1 rounded-full text-xs flex-shrink-0 mt-1">✓</span>
                                        <span className="text-center md:text-left">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

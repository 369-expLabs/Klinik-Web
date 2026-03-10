import Link from "next/link";
import NavbarCP from "@/components/ui/NavbarCP";
import Footer from "@/components/ui/Footer";

const BLOG_DATA = [
    {
        slug: "apa-itu-hypnotherapy",
        title: "Apa Itu Hypnotherapy? Mitos vs Fakta yang Perlu Kamu Tahu",
        category: "Hypnotherapy 101",
        readTime: "5 menit baca",
        excerpt: "Hypnotherapy bukan sihir, bukan tidur, dan bukan kehilangan kontrol. Inilah penjelasan ilmiahnya.",
        date: "10 Mar 2026",
    },
    {
        slug: "kenapa-masalah-selalu-kambuh",
        title: "Kenapa Masalah Emosional Selalu Kambuh? Ini Penjelasan Ilmiahnya",
        category: "Kesehatan Mental",
        readTime: "7 menit baca",
        excerpt: "Ada alasan spesifik mengapa kecemasan, trauma, dan pola pikir negatif terus berulang meski sudah 'diselesaikan'.",
        date: "8 Mar 2026",
    },
    {
        slug: "pikiran-bawah-sadar-88-persen",
        title: "88% Pikiran Kamu Bekerja di Bawah Sadar — dan Kamu Tidak Menyadarinya",
        category: "Neurosains",
        readTime: "6 menit baca",
        excerpt: "Semua keputusan, reaksi emosional, dan kebiasaan kamu didorong oleh lapisan yang tidak kamu lihat. Pelajari cara mengaksesnya.",
        date: "5 Mar 2026",
    }
];

export default function BlogIndexPage() {
    return (
        <main className="overflow-x-hidden bg-cream">
            <NavbarCP />

            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative pt-48 pb-24 md:pt-56 md:pb-32 px-4 md:px-8 overflow-hidden">
                <div className="absolute top-0 left-[-5%] w-[60vw] h-[60vw] bg-sage/8 rounded-full blur-[160px] pointer-events-none" />

                <div className="max-w-5xl mx-auto relative z-10">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-sage font-satoshi mb-6">
                        Artikel & Edukasi
                    </p>
                    <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-charcoal leading-none tracking-tighter mb-8 max-w-3xl">
                        Pikiran Sehat, <span className="italic text-sage-dark">Hidup Lebih Ringan</span>
                    </h1>
                    <p className="text-taupe font-satoshi text-lg md:text-xl leading-relaxed max-w-2xl">
                        Dari neurosains hingga psikologi praktis. Pelajari cara pikiran bawah sadar Anda bekerja dan temukan wawasan baru untuk kehidupan yang lebih damai.
                    </p>
                </div>
            </section>

            {/* ── BLOG CARDS ─────────────────────────────────── */}
            <section className="bg-cream py-4 md:py-8 px-4 md:px-8 pb-32 md:pb-48">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {BLOG_DATA.map((article) => (
                        <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex flex-col h-full bg-cream-dark rounded-3xl p-8 md:p-10 border border-charcoal/8 hover:border-sage/30 transition-colors">
                            <div className="flex items-start justify-between mb-6">
                                <span className="bg-gold/20 text-charcoal text-[10px] font-bold px-3 py-1 rounded-full font-satoshi uppercase tracking-widest">
                                    {article.category}
                                </span>
                                <span className="text-[10px] font-bold tracking-widest uppercase text-sage/80 font-satoshi">
                                    {article.readTime}
                                </span>
                            </div>
                            <h2 className="font-playfair text-2xl font-bold text-charcoal mb-4 tracking-tighter group-hover:text-sage-dark transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-sm text-taupe font-satoshi leading-relaxed mb-8 flex-grow">
                                {article.excerpt}
                            </p>
                            <div className="flex items-center justify-between pt-6 border-t border-charcoal/10 mt-auto">
                                <span className="text-xs font-satoshi text-taupe">{article.date}</span>
                                <span className="text-xs font-bold font-satoshi text-charcoal uppercase tracking-widest group-hover:translate-x-1 transition-transform">
                                    Baca &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}

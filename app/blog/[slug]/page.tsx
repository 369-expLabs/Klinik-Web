import Link from "next/link";
import { notFound } from "next/navigation";
import NavbarCP from "@/components/ui/NavbarCP";
import Footer from "@/components/ui/Footer";
import { waUrl } from "@/lib/config";

// Simulated DB / Hardcoded array (including content)
const BLOG_POSTS = [
    {
        slug: "apa-itu-hypnotherapy",
        title: "Apa Itu Hypnotherapy? Mitos vs Fakta yang Perlu Kamu Tahu",
        category: "Hypnotherapy 101",
        readTime: "5 menit baca",
        date: "10 Mar 2026",
        content: [
            "Hypnotherapy sering disalahpahami akibat miskonsepsi yang dipopulerkan oleh tayangan televisi. Banyak yang mengira bahwa dalam kondisi hipnosis, seseorang berada dalam keadaan tertidur, kehilangan kesadaran, atau bahkan kehilangan kontrol atas diri mereka sendiri. Padahal, faktanya sama sekali berbeda. Secara ilmiah, hipnosis adalah kondisi di mana rentang kesadaran seseorang menjadi sangat terfokus dan sugestibel — mirip dengan momen di mana Anda begitu asyik menonton film hingga tidak mendengar orang lain memanggil nama Anda.",
            "Dalam pendekatan klinis, hypnotherapy digunakan sebagai alat bantu untuk menjembatani pikiran sadar dan pikiran bawah sadar. Di sinilah letak kebenarannya: Anda tetap memegang kendali penuh. Seorang terapis tidak bisa memaksa Anda melakukan hal yang bertentangan dengan nilai-nilai moral Anda. Sebaliknya, melalui panduan yang disengaja, terapis membantu Anda menemukan 'file-file' yang bermasalah dalam pikiran bawah sadar dan memfasilitasi Anda untuk merestrukturisasinya menjadi lebih sehat.",
            "Jika Anda pernah mencoba mengubah kebiasaan atau mengatasi ketakutan namun selalu gagal, ada kemungkinan masalah utamanya terletak di bawah kesadaran logis Anda. Hypnotherapy klinis yang dijalankan oleh praktisi medis profesional, seperti di House of Peace, menjadi jembatan yang langsung menargetkan akar emosi tersebut dan memperbaikinya, sehingga Anda dapat kembali menjalani rutinitas dengan pikiran yang jauh lebih ringan."
        ]
    },
    {
        slug: "kenapa-masalah-selalu-kambuh",
        title: "Kenapa Masalah Emosional Selalu Kambuh? Ini Penjelasan Ilmiahnya",
        category: "Kesehatan Mental",
        readTime: "7 menit baca",
        date: "8 Mar 2026",
        content: [
            "Mungkin Anda merasa sudah menyelesaikan masalah dari masa lalu, atau merasa sudah bisa melanjutkan hidup. Namun tiba-tiba perasan cemas, respon ketakutan yang berlebihan, atau memori pahit itu kembali muncul seperti 'kambuh'. Ada alasan ilmiah mengapa fenomena tersebut terjadi: pikiran bawah sadar Anda memiliki sistem proteksi yang dirancang untuk melindungi Anda dari hal-hal yang pernah menyakiti.",
            "Pikiran sadar (logika) kita hanya mencakup sebagian kecil dari kapasitas otak. Sisanya, sekitar 88%, dikendalikan oleh pikiran bawah sadar yang bertugas menyimpan emosi, trauma, serta instalasi program otomatis. Ketika sebuah peristiwa emosional tidak diproses dengan utuh, bagian bawah sadar akan mengkategorikannya sebagai ancaman. Setiap kali Anda menjumpai situasi yang menyerupai 'trigger' aslinya, pikiran bawah sadar akan menekan alarm waspada untuk menghindari luka yang sama.",
            "Maka dari itu, sekadar menyuruh diri sendiri untuk melupakan kejadian tersebut sering kali tidak efektif. Yang diperlukan adalah kembali mengakses akar memori di bawah sadar dan menetralisir muatan emosi negatifnya. Dengan pemaparan bertahap dan restrukturisasi kognitif menggunakan bantuan hipnoterapi, perlahan-lahan frekuensi 'kambuh' masalah ini dapat diputus hingga tuntas."
        ]
    },
    {
        slug: "pikiran-bawah-sadar-88-persen",
        title: "88% Pikiran Kamu Bekerja di Bawah Sadar — dan Kamu Tidak Menyadarinya",
        category: "Neurosains",
        readTime: "6 menit baca",
        date: "5 Mar 2026",
        content: [
            "Tahukah Anda bahwa hampir semua tindakan, nilai yang diyakini, ketakutan, dan keputusan yang Anda ambil per harinya dikelola tanpa andil logika langsung? Psikolog sering menganalogikan struktur pikiran manusia seperti gunung es, dengan kesadaran sadar kita hanya mencakup bagian puncak es yang terlihat di atas permukaan.",
            "Lapisan bawah sadar bertanggung jawab untuk menyimpan program yang paling dalam—dari keyakinan seputar diri 'Apakah saya cukup berharga?' sampai respon saraf otomatis terhadap stres. Masalahnya, ketika Anda mencoba melakukan perbaikan seperti berpikiran positif, seringkali itu hanya upaya di tingkat sadar. Jika di tingkat 88% Anda masih meyakini kebalikannya, perubahan sejati tidak akan terjadi karena pikiran bawah sadar selalu memenangkan konflik.",
            "Untungnya, neurosains menunjukkan otak kita bersifat plastis (neuroplasticity). Dengan panduan yang tepat melalui akses langsung ke gelombang otak Theta—seperti yang dilakukan dalam hipnoterapi klinis—kita memiliki kebebasan dan kapabilitas untuk membentuk ulang program bawah sadar tersebut agar bekerja untuk mendukung kita, bukan malah melawan kita."
        ]
    }
];

export function generateStaticParams() {
    return BLOG_POSTS.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
    const post = BLOG_POSTS.find((p) => p.slug === params.slug);

    if (!post) {
        notFound();
    }

    return (
        <main className="overflow-x-hidden bg-cream">
            <NavbarCP />

            <article className="relative pt-40 md:pt-48 pb-24 md:pb-32 px-4 md:px-8">
                <div className="max-w-3xl mx-auto relative z-10">
                    {/* Back link */}
                    <Link href="/blog" className="inline-flex items-center text-xs font-bold tracking-widest uppercase text-taupe hover:text-charcoal transition-colors mb-12 font-satoshi">
                        &larr; Kembali ke Blog
                    </Link>

                    {/* Meta */}
                    <div className="flex items-center gap-4 mb-6">
                        <span className="bg-gold/20 text-charcoal text-[10px] font-bold px-3 py-1 rounded-full font-satoshi uppercase tracking-widest">
                            {post.category}
                        </span>
                        <span className="text-[10px] font-bold tracking-widest uppercase text-sage/80 font-satoshi">
                            {post.readTime}
                        </span>
                    </div>

                    {/* Title */}
                    <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold text-charcoal leading-tight tracking-tighter mb-8">
                        {post.title}
                    </h1>

                    {/* Date */}
                    <p className="text-sm text-taupe font-satoshi mb-12 border-b border-charcoal/10 pb-12">
                        Dipublikasikan pada {post.date}
                    </p>

                    {/* Content */}
                    <div className="prose prose-charcoal max-w-none">
                        {post.content.map((paragraph, index) => (
                            <p key={index} className="text-charcoal/80 font-satoshi text-[17px] leading-loose mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                </div>
            </article>

            {/* ── CTA SECTION ─────────────────────────────────── */}
            <section className="bg-charcoal py-24 px-4 md:px-8">
                <div className="max-w-3xl mx-auto text-center">
                    <p className="text-xs font-bold tracking-[0.3em] uppercase text-sage font-satoshi mb-6">
                        Langkah Selanjutnya
                    </p>
                    <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-cream leading-tight tracking-tighter mb-6">
                        Siap Memulai Perjalanan Pemulihan?
                    </h2>
                    <p className="text-taupe-light font-satoshi text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                        Jangan biarkan emosi dan trauma mengendalikan masa depan Anda. Hubungi kami untuk konsultasi awal tanpa komitmen.
                    </p>
                    <a
                        href={waUrl("Halo, saya baru membaca artikel blog dan tertarik untuk booking sesi hypnotherapy.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-cream text-charcoal font-satoshi text-[12px] uppercase tracking-[0.2em] font-bold px-10 py-5 rounded-full hover:bg-gold hover:text-charcoal transition-colors shadow-lg active:scale-[0.98]"
                    >
                        Mulai Konsultasi Gratis
                    </a>
                </div>
            </section>

            <Footer />
        </main>
    );
}

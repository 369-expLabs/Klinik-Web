const questions = [
  "Pernah tiba-tiba takut sesuatu yang buruk akan terjadi, padahal tidak ada alasan jelas?",
  "Merasa sendirian meski dikelilingi banyak orang — bahkan orang-orang yang kamu cintai?",
  "Sudah lelah pura-pura baik-baik saja, padahal di dalam terasa hancur?",
  "Sudah mencoba memaafkan, tapi rasa sakit itu selalu kembali seolah belum selesai?",
];

export default function DeeperPain() {
  return (
    <section className="bg-sage-dark py-20 md:py-28 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-sage-light font-dm mb-3">
            Jujur pada Diri Sendiri
          </p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-cream mb-4">
            Apakah Kamu Sedang di{" "}
            <span className="italic text-gold-light">Fase Ini?</span>
          </h2>
          <p className="text-sage-light font-dm max-w-xl mx-auto text-base leading-relaxed">
            Tidak apa-apa jika jawabannya iya. Menyadarinya adalah langkah
            pertama yang paling berani.
          </p>
        </div>

        <div className="space-y-4">
          {questions.map((q, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-2xl px-7 py-5 border border-white/10"
            >
              <span className="min-w-8 h-8 rounded-full bg-gold/20 text-gold-light flex items-center justify-center text-sm font-bold font-dm mt-0.5 flex-shrink-0">
                {i + 1}
              </span>
              <p className="text-cream font-dm text-base leading-relaxed">{q}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white/10 rounded-2xl p-6 text-center border border-white/10">
          <p className="text-gold-light font-playfair text-xl font-semibold mb-2">
            Kamu tidak sedang lemah.
          </p>
          <p className="text-sage-light font-dm text-sm leading-relaxed">
            Pikiran bawah sadar kamu sedang mencoba melindungimu dari luka lama
            — dengan cara yang tidak lagi membantu. Itulah yang ingin kita
            selesaikan bersama.
          </p>
        </div>
      </div>
    </section>
  );
}

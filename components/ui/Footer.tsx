export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="font-playfair text-xl font-bold text-cream mb-2">
              House of Peace
            </h3>
            <p className="text-sm text-taupe-light leading-relaxed font-satoshi">
              Hypnotherapy & Wellness Center<br />
              Kedoya Utara, Kebon Jeruk<br />
              Jakarta Barat 11520
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage-light mb-4 font-satoshi">
              Layanan
            </p>
            <ul className="space-y-2 text-sm text-taupe-light font-satoshi">
              <li>Individual Hypnotherapy</li>
              <li>Konsultasi Online</li>
              <li>Komunitas Meditasi HOPE</li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-sage-light mb-4 font-satoshi">
              Kontak
            </p>
            <p className="text-sm text-taupe-light font-satoshi leading-relaxed">
              WhatsApp tersedia untuk konsultasi & booking.<br />
              Kami merespon dalam 1×24 jam.
            </p>
          </div>
        </div>
        <div className="border-t border-charcoal-soft pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-sage font-satoshi">
            © {new Date().getFullYear()} House of Peace. All rights reserved.
          </p>
          <p className="text-xs text-sage font-satoshi">
            Kerahasiaan pasien dijamin sepenuhnya.
          </p>
        </div>
      </div>
    </footer>
  );
}

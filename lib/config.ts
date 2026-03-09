// ============================================================
// SITE CONFIG — satu tempat untuk semua konstanta global
// Ganti nilai di sini, berlaku ke seluruh website
// ============================================================

export const SITE_CONFIG = {
  name: "House of Peace",
  tagline: "Clinical Hypnotherapy",
  address: "Kedoya Utara, Kebon Jeruk, Jakarta Barat 11520",

  // WhatsApp — GANTI DI SINI
  wa: {
    number: "6281234567890", // TODO: ganti nomor asli
    defaultMessage: "Halo, saya ingin konsultasi tentang terapi di House of Peace.",
    bookingMessage: "Halo, saya ingin booking sesi hypnotherapy di House of Peace.",
  },

  // Dokter utama
  doctor: {
    name: "Dr. Yuliana, CHt®",
    title: "Medical Doctor & Clinical Hypnotherapist",
    photo: "/illustrations/dr-yuliana.jpg", // TODO: ganti foto asli
  },
} as const;

// Helper: generate WhatsApp URL
export function waUrl(message?: string): string {
  const msg = message ?? SITE_CONFIG.wa.defaultMessage;
  return `https://wa.me/${SITE_CONFIG.wa.number}?text=${encodeURIComponent(msg)}`;
}

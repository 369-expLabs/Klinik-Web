import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";

export const metadata: Metadata = {
  title: "House of Peace — Hypnotherapy & Wellness Center",
  description:
    "Bebaskan diri dari trauma & emosi yang menyandera hidupmu. 90% pasien merasakan perubahan sejak sesi pertama. 100% tanpa obat. Supervisi dokter medis.",
  keywords:
    "hipnoterapi jakarta, hypnotherapy jakarta, terapi trauma, anxiety, depresi, House of Peace, Dr Yuliana",
  openGraph: {
    title: "House of Peace — Hypnotherapy & Wellness Center",
    description:
      "5.000+ pasien telah pulih. Selesaikan masalah mental langsung ke akarnya. Cepat, permanen, 100% tanpa obat.",
    type: "website",
    locale: "id_ID",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body>
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

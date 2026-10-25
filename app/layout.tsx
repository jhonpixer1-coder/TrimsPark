import type { Metadata } from "next";
import { Sora, Hind_Siliguri } from "next/font/google";
import "./globals.css";

const sora = Sora({ subsets: ["latin"], variable: "--f-display", weight: ["400", "600", "800"] });
const body = Hind_Siliguri({ subsets: ["latin", "bengali"], variable: "--f-body", weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Trims Park | Garments accessories for export RMG",
  description: "Woven labels, printed labels, hangtags, elastic, tapes, stickers and poly bags from Uttara, Dhaka. Samples in 2 days.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Savannah Honey - Pure, Natural Honey from the Heart of Savannah",
  description:
    "Experience the rich, golden sweetness of our ethically harvested honey, carefully collected from the pristine meadows of Savannah.",
  keywords:
    "honey, savannah honey, organic honey, raw honey, natural honey, local honey",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

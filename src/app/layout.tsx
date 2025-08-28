import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "@/blocks/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Kilian KryptoMaster App",
  description: "Kilian App landing page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${poppins.variable} antialiased`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}

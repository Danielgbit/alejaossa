import { Ballet, Cormorant_Garamond, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const cormorant_garamond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const lexend_deca = Lexend_Deca({
  variable: "--font-lexend-deca",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const ballet = Ballet({
  variable: "--font-ballet",
  subsets: ["latin"],
  weight: ["400"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Navbar />
      <body
        className={`${cormorant_garamond.variable} ${lexend_deca.variable} ${ballet.variable} font-sans} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

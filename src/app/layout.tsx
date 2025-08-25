import { Ballet, Cormorant_Garamond, Lexend_Deca } from "next/font/google";

/* Styles import */
import "./globals.css";
import "./styles/Button.css";
import "./styles/Fonts.css";
import "./styles/LettersSpacing.css";
import "./styles/Backgrounds.css";
import "./styles/ColorsText.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Providers from "./Providers";

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
      <body
        className={`${cormorant_garamond.variable} ${lexend_deca.variable} ${ballet.variable} font-sans} antialiased`}
      >
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Metadata } from "next";
import { DefaultMetadataConfig } from "./types";

export const defaultConfig: DefaultMetadataConfig = {
  title: "Blog - Aleja Ossa",
  description: "Descubre tu esencia",
  siteName: "Aleja ossa",
  baseUrl: "https://alejaossa.vercel.app",
  defaultImage: "https://alejaossa.vercel.app/images/og/default-og.jpg", // ← Ruta corregida
  twitterHandle: "@alejaossa",
};

export const defaultMetadata: Metadata = {
  title: defaultConfig.title,
  description: defaultConfig.description,
  metadataBase: new URL(defaultConfig.baseUrl),
  openGraph: {
    title: defaultConfig.title,
    description: defaultConfig.description,
    type: "website",
    locale: "es_ES",
    siteName: defaultConfig.siteName,
    url: defaultConfig.baseUrl,
    images: [
      {
        url: defaultConfig.defaultImage, // ← Usa la ruta corregida
        width: 1200,
        height: 630,
        alt: defaultConfig.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultConfig.title,
    description: defaultConfig.description,
    creator: defaultConfig.twitterHandle,
    images: [defaultConfig.defaultImage], // ← Usa la ruta corregida
  },
  robots: {
    index: true,
    follow: true,
  },
};
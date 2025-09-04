// src/components/Blog/BlogMetaTags.tsx
import { BlogMetaTagsProps } from "@/types/blogMetaTags";
import Head from "next/head";

export default function BlogMetaTags({
  title,
  description,
  imageUrl,
  slug,
  date,
  author = "Aleja Ossa",
  siteName = "Blogs"
}: BlogMetaTagsProps) {
  const fullUrl = typeof window !== "undefined"
    ? `${window.location.origin}/blog/${slug}`
    : `https://alejaossa.vercel.app/blog/${slug}`;

  return (
    <Head>
      <title>{title} | {siteName}</title>
      <meta name="description" content={description} />

      {/* Open Graph tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="article" />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Otros meta tags útiles */}
      <meta name="author" content={author} />
      <meta property="article:published_time" content={new Date(date).toISOString()} />
      <meta property="article:author" content={author} />
    </Head>
  );
}
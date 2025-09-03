import { Metadata } from 'next';
import { Blog } from '@/types/blog';
import { defaultConfig } from './defaultMetadata';

export function generateBlogMetadata(blog: Blog): Metadata {
  const fullImageUrl = blog.imageUrl.startsWith('http') 
    ? blog.imageUrl 
    : `${defaultConfig.baseUrl}${blog.imageUrl}`;

  const blogUrl = `${defaultConfig.baseUrl}/blog/${blog.slug}`;

  return {
    title: blog.title,
    description: blog.description,
    metadataBase: new URL(defaultConfig.baseUrl),
    openGraph: {
      title: blog.title,
      description: blog.description,
      type: "article",
      locale: "es_ES",
      siteName: defaultConfig.siteName,
      url: blogUrl,
      publishedTime: blog.date,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      creator: defaultConfig.twitterHandle,
      images: [fullImageUrl],
    },
    alternates: {
      canonical: blogUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
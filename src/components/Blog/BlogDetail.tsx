"use client";

import { Blog } from "@/types/blog";
import {
  Twitter,
  Facebook,
  MessageCircle,
  Share2,
  LinkIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
import { useState } from "react";

function BlogDetail({ blog }: { blog: Blog }) {
  const [showShareOptions, setShowShareOptions] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const shareOnSocialMedia = (platform: string) => {
    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(blog.title);

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle} ${encodedUrl}`;
        break;
      default:
        return;
    }

    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareOptions(false);
  };

  const copyToClipboard = () => {
    const currentUrl =
      typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard
      .writeText(currentUrl)
      .then(() => {
        alert("Enlace copiado al portapapeles");
        setShowShareOptions(false);
      })
      .catch((err) => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <article className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
      {/* Breadcrumb */}
      <nav className="text-xs text-dark-01 font-lexend tracking-brand mb-4 sm:mb-6">
        <Link href="/" className="hover:text-violet-600">
          Inicio
        </Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-violet-600">
          Blog
        </Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{blog.title}</span>
      </nav>

      {/* Imagen principal */}
      <div className="relative w-full h-56 sm:h-72 md:h-96 mb-6 sm:mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark-03 font-lexend tracking-title mb-3 sm:mb-4">
          {blog.title}
        </h1>

        <div className="flex flex-wrap items-center text-dark-01 font-lexend text-xs gap-2">
          <time dateTime={blog.date}>{formatDate(blog.date)}</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
      </header>

      {/* Descripción */}
      {blog.description && (
        <p className="text-base sm:text-lg md:text-xl text-dark-05 font-lexend font-light tracking-paragraph italic mb-6 sm:mb-8 border-l-4 border-purple-500 pl-3 sm:pl-4">
          {blog.description}
        </p>
      )}

      {/* Contenido */}
      <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
        <div
          className="text-dark-01 font-lexend tracking-paragraph text-sm sm:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Footer */}
      <footer className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-purple-800">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <Link href="/blog" className="w-full sm:w-auto">
            <Button className="button-01 w-full sm:w-auto">
              ← Volver al blog
            </Button>
          </Link>

          <div className="flex items-center space-x-2 relative w-full sm:w-auto justify-end">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-full font-lexend uppercase tracking-brand font-normal hover:bg-purple-800 bg-dark-03 text-light-02 shadow-xl cursor-pointer transition-colors w-full sm:w-auto justify-center"
              onClick={() => setShowShareOptions(!showShareOptions)}
            >
              <Share2 size={18} />
              <span>Compartir</span>
            </button>

            {showShareOptions && (
              <div className="absolute top-12 right-0 z-20 bg-light-01 rounded-lg shadow-lg p-3 flex flex-col gap-2 min-w-[180px] border border--200">
                <button
                  onClick={() => shareOnSocialMedia("twitter")}
                  className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                >
                  <Twitter size={18} className="text-purple-400" />
                  <span className="text-sm font-lexend tracking-brand">Twitter</span>
                </button>
                <button
                  onClick={() => shareOnSocialMedia("facebook")}
                  className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded-md"
                >
                  <Facebook size={18} className="text-purple-600" />
                  <span className="text-sm font-lexend tracking-brand">Facebook</span>
                </button>
                <button
                  onClick={() => shareOnSocialMedia("whatsapp")}
                  className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded-md"
                >
                  <MessageCircle size={18} className="text-purple-500" />
                  <span className="text-sm font-lexend tracking-brand">WhatsApp</span>
                </button>
                <button
                  onClick={copyToClipboard}
                  className="flex items-center gap-2 p-2 hover:bg-purple-100 rounded-md"
                >
                  <LinkIcon size={18} className="text-gray-600" />
                  <span className="text-sm font-lexend tracking-brand">Copiar enlace</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </footer>
    </article>
  );
}

export default BlogDetail;

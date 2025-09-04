"use client";

import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, MessageCircle, Share2, LinkIcon } from "lucide-react";
import React, { useState } from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  // Función para obtener la URL completa del blog
  const getShareUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}/blog/${blog.slug}`;
    }
    return `https://tudominio.com/blog/${blog.slug}`;
  };

  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const shareOnSocialMedia = (platform: string) => {
    const currentUrl = getShareUrl(); // ¡CORREGIDO: Usamos getShareUrl() aquí!
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(blog.title);
    const encodedDescription = encodeURIComponent(blog.description);
    
    let shareUrl = "";
    
    switch(platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}&via=tuusuario`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedTitle}`;
        break;
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodedTitle}%0A%0A${encodedDescription}%0A%0A${encodedUrl}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, "_blank", "width=600,height=400");
    setShowShareOptions(false);
  };

  const copyToClipboard = async () => {
    const currentUrl = getShareUrl(); // ¡CORREGIDO: Usamos getShareUrl() aquí!
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("✅ Enlace copiado al portapapeles");
      setShowShareOptions(false);
    } catch (err) {
      console.error("Error al copiar: ", err);
      // Fallback para navegadores más antiguos
      const textArea = document.createElement("textarea");
      textArea.value = currentUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      alert("✅ Enlace copiado al portapapeles");
    }
  };

  const handleShareClick = () => {
    // Intentar usar la Web Share API si está disponible
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.description,
        url: getShareUrl(), // ¡CORREGIDO: Usamos getShareUrl() aquí!
      })
      .catch((error) => {
        console.log('Error al compartir:', error);
        setShowShareOptions(true);
      });
    } else {
      setShowShareOptions(!showShareOptions);
    }
  };

  return (
    <div className="bg-gradient-02 rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow relative group">
      {/* Botón de compartir flotante */}
      <button 
        className="absolute top-3 right-3 z-10 bg-white/90 p-2 rounded-full hover:bg-white transition-all transform hover:scale-110 shadow-md"
        onClick={handleShareClick}
        aria-label="Compartir artículo"
      >
        <Share2 size={16} className="text-dark-01" />
      </button>

      {/* Opciones de compartir (aparecen al hacer clic) */}
      {showShareOptions && (
        <div className="absolute top-12 right-3 z-20 bg-white rounded-lg shadow-xl p-3 flex flex-col gap-2 min-w-[120px] border border-gray-200">
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-xs"
            onClick={() => shareOnSocialMedia("twitter")}
          >
            <Twitter size={16} className="text-blue-400" />
            <span>Twitter</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-xs"
            onClick={() => shareOnSocialMedia("facebook")}
          >
            <Facebook size={16} className="text-blue-600" />
            <span>Facebook</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-xs"
            onClick={() => shareOnSocialMedia("whatsapp")}
          >
            <MessageCircle size={16} className="text-green-500" />
            <span>WhatsApp</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors text-xs"
            onClick={copyToClipboard}
          >
            <LinkIcon size={16} className="text-gray-600" />
            <span>Copiar link</span>
          </button>
        </div>
      )}

      {/* Imagen del blog */}
      <Link href={`/blog/${blog.slug}`} className="block w-full h-50 relative overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </Link>

      {/* Contenido del card */}
      <div className="p-5">
        <Link href={`/blog/${blog.slug}`}>
          <h2 className="font-semibold text-dark-01 font-lexend tracking-title mb-2 line-clamp-2 hover:text-purple-700 transition-colors text-lg">
            {blog.title}
          </h2>
        </Link>

        <p className="text-sm text-dark-01 tracking-sub font-lexend mb-4 line-clamp-3 leading-relaxed">
          {blog.description}
        </p>
        
        <div className="flex items-center text-xs text-dark-02 font-lexend mb-3">
          <span className="bg-gray-100 px-2 py-1 rounded-full">{formatDate(blog.date)}</span>
          <span className="mx-2">•</span>
          <span className="text-dark-01 font-medium">Aleja Ossa</span>
        </div>
        
        <div className="flex justify-between items-center pt-3 border-t border-gray-200">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-xs text-white font-lexend bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full font-medium transition-colors"
          >
            Leer artículo →
          </Link>
          
          {/* Iconos de compartir en la parte inferior */}
          <div className="flex gap-1">
            <button 
              onClick={() => shareOnSocialMedia("twitter")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Compartir en Twitter"
            >
              <Twitter size={16} className="text-blue-400" />
            </button>
            <button 
              onClick={() => shareOnSocialMedia("facebook")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Compartir en Facebook"
            >
              <Facebook size={16} className="text-blue-600" />
            </button>
            <button 
              onClick={() => shareOnSocialMedia("whatsapp")}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              aria-label="Compartir en WhatsApp"
            >
              <MessageCircle size={16} className="text-green-500" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
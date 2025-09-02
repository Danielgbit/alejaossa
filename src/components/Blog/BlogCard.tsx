import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { Twitter, Facebook, MessageCircle, Share2 } from "lucide-react";
import React, { useState } from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const [showShareOptions, setShowShareOptions] = useState(false);
  
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };

  const shareOnSocialMedia = (platform: string) => {
    const currentUrl = `${window.location.origin}/blog/${blog.slug}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(blog.title);
    
    let shareUrl = "";
    
    switch(platform) {
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
    const currentUrl = `${window.location.origin}/blog/${blog.slug}`;
    navigator.clipboard.writeText(currentUrl)
      .then(() => {
        alert("Enlace copiado al portapapeles");
        setShowShareOptions(false);
      })
      .catch(err => {
        console.error("Error al copiar: ", err);
      });
  };

  return (
    <div className="bg-gradient-02 rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-shadow relative">
      {/* Botón de compartir flotante */}
      <button 
        className="absolute top-3 right-3 z-10 bg-white/80 p-2 rounded-full hover:bg-white transition-colors"
        onClick={() => setShowShareOptions(!showShareOptions)}
        aria-label="Compartir artículo"
      >
        <Share2 size={16} className="text-dark-01" />
      </button>

      {/* Opciones de compartir (aparecen al hacer clic) */}
      {showShareOptions && (
        <div className="absolute top-12 right-3 z-20 bg-white rounded-lg shadow-lg p-3 flex flex-col gap-2">
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => shareOnSocialMedia("twitter")}
          >
            <Twitter size={18} className="text-blue-400" />
            <span className="text-xs">Twitter</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => shareOnSocialMedia("facebook")}
          >
            <Facebook size={18} className="text-blue-600" />
            <span className="text-xs">Facebook</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={() => shareOnSocialMedia("whatsapp")}
          >
            <MessageCircle size={18} className="text-green-500" />
            <span className="text-xs">WhatsApp</span>
          </button>
          <button 
            className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md transition-colors"
            onClick={copyToClipboard}
          >
            <span className="text-xs">Copiar enlace</span>
          </button>
        </div>
      )}

      <div className="w-full h-50 relative">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="font-semibold text-dark-01 font-lexend tracking-title mb-2 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-xs h-8 text-dark-01 tracking-sub font-lexend mb-4 line-clamp-2">
          {blog.description}
        </p>
        <div className="flex items-center text-[10px] text-dark-02 font-lexend mb-2">
          <span>{formatDate(blog.date)}</span>
          <span className="mx-2">•</span>
          <span>Aleja Ossa</span>
        </div>
        
        <div className="flex justify-between items-center">
          <Link
            href={`/blog/${blog.slug}`}
            className="text-[10px] text-light-04 font-lexend bg-dark-01 px-2 py-1 rounded-full font-light"
          >
            Leer artículo →
          </Link>
          
          {/* Iconos de compartir en la parte inferior (alternativa) */}
          <div className="flex gap-2">
            <button 
              onClick={() => shareOnSocialMedia("twitter")}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Compartir en Twitter"
            >
              <Twitter size={14} className="text-purple-800" />
            </button>
            <button 
              onClick={() => shareOnSocialMedia("facebook")}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Compartir en Facebook"
            >
              <Facebook size={14} className="text-purple-800" />
            </button>
            <button 
              onClick={() => shareOnSocialMedia("whatsapp")}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              aria-label="Compartir en WhatsApp"
            >
              <MessageCircle size={14} className="text-purple-800" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
import { ChartAreaIcon, FacebookIcon, Link, LinkedinIcon, Share, TwitterIcon } from "lucide-react";

interface Blog {
  slug: string;
  title: string;
  description: string;
}

interface SocialShareButtonsProps {
  blog: Blog;
}

export default function SocialShareButtons({ blog }: SocialShareButtonsProps) {
  const currentUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/blog/${blog.slug}`
    : `https://alejaossa.vercel.app/blog/${blog.slug}`;

  const shareText = `Mira este blog: ${blog.title}`;

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      alert("¡Enlace copiado al portapapeles!");
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-right sm:items-center justify-right gap-4">
      <div className="flex items-center gap-3">
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-500 hover:text-purple-700 transition-colors"
          aria-label="Compartir en Twitter"
        >
          <TwitterIcon size={18} />
        </a>
        <a
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-800 hover:text-purple-600 transition-colors"
          aria-label="Compartir en Facebook"
        >
          <FacebookIcon size={18} />
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-700 hover:text-purple-500 transition-colors"
          aria-label="Compartir en Whatsapp"
        >
          <Share size={18} />
        </a>
        <button
          onClick={copyToClipboard}
          className="text-purple-600 hover:text-purple-800 transition-colors"
          aria-label="Copiar enlace"
        >
          <Link size={18} />
        </button>
      </div>
    </div>
  );
}
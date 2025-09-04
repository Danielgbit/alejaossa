import Image from "next/image";
import { motion } from "framer-motion";
import SocialShareButtons from "@/components/Blog/SocialShareButtons";
import { Blog } from "@/types/blog";

interface BlogDetailProps {
  blog: Blog;
  showSocialShare?: boolean;
}

export default function BlogDetail({
  blog,
  showSocialShare = true,
}: BlogDetailProps) {
  const formattedDate = new Date(blog.date).toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="blog-detail max-w-3xl mx-auto px-4 py-8">
      {/* Encabezado */}
      <header className="mb-10 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl tracking-title font-extrabold text-dark-04 leading-tight mb-4"
        >
          {blog.title}
        </motion.h1>

        <p className="text-sm text-purple-500 tracking-[-0.8px]">{formattedDate}</p>

        {blog.imageUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-72 md:h-[28rem] mt-6 rounded-2xl overflow-hidden shadow-lg"
          >
            <Image
              src={blog.imageUrl}
              alt={blog.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              priority
            />
          </motion.div>
        )}
      </header>

      {/* Contenido */}
      <div className="prose prose-lg prose-purple max-w-none mb-12">
        {blog.description && (
          <p className="text-xl text-dark-04 italic mb-8 border-l-4 border-purple-500 pl-4">
            {blog.description}
          </p>
        )}
        <div className="font-lexend text-sm text-dark-02" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>

      {/* Footer con botones de compartir */}
      {showSocialShare && (
        <footer className="border-t border-purple-500 pt-8 mt-10">
          <h3 className="text-xs font-lexend tracking-title font-semibold text-dark-03 mb-4">
            Comparte este artículo:
          </h3>
          <SocialShareButtons blog={blog} />
        </footer>
      )}
    </article>
  );
}

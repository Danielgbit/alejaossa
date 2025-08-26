'use client';

import { Blog } from '@/types/blog';
import Image from 'next/image';
import Link from 'next/link';


function BlogDetail({ blog }: { blog: Blog }) {
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <article className="max-w-4xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-6">
        <Link href="/" className="hover:text-blue-600">Inicio</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">{blog.title}</span>
      </nav>

      {/* Imagen principal */}
      <div className="relative w-full h-96 mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {blog.title}
        </h1>
        
        <div className="flex items-center text-gray-600">
          <time dateTime={blog.date} className="mr-4">
            {formatDate(blog.date)}
          </time>
          <span>•</span>
          <span className="ml-4">5 min read</span>
        </div>
      </header>

      {/* Descripción */}
      {blog.description && (
        <p className="text-xl text-gray-700 italic mb-8 border-l-4 border-blue-500 pl-4">
          {blog.description}
        </p>
      )}

      {/* Contenido */}
      <div className="prose prose-lg max-w-none">
        <div 
          className="text-gray-800 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>

      {/* Footer del artículo */}
      <footer className="mt-12 pt-8 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <Link
            href="/blog"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            ← Volver al blog
          </Link>
          
          <div className="flex space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Compartir en Twitter</span>
              {/* Icono de Twitter */}
            </button>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <span className="sr-only">Compartir en Facebook</span>
              {/* Icono de Facebook */}
            </button>
          </div>
        </div>
      </footer>
    </article>
  );
}

export default BlogDetail;
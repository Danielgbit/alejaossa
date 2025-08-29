import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = ({ blog }: { blog: Blog }) => {
  const formatDate = (dateString: string) => {
    return new Intl.DateTimeFormat("es-ES", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(new Date(dateString));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="w-full h-48 relative">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-5">
        <h2 className="font-semibold text-gray-800 mb-2 line-clamp-2">
          {blog.title}
        </h2>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {blog.description}
        </p>
        <div className="flex items-center text-xs text-gray-500 mb-2">
          <span>{formatDate(blog.date)}</span>
          <span className="mx-2">•</span>
          <span>Aleja Ossa</span>
        </div>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-sm text-blue-600 hover:text-blue-800 font-medium"
        >
          Leer artículo →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

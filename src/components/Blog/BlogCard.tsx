import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";


const BlogCard = ({ blog } : { blog : Blog }) => {
  return (
    <div
      key={blog.id}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="w-full h-56 relative">
        <Image
          src={blog.imageUrl}
          alt={blog.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-primary mb-2">
          {blog.title}
        </h2>
        <p className="text-gray-600 mb-4">{blog.description}</p>
        <Link
          href={`/blog/${blog.slug}`}
          className="text-accent font-medium hover:underline"
        >
          Leer más →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

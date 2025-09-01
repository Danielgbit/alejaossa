"use client";

import BlogCard from "@/components/Blog/BlogCard";
import EmptyBlog from "@/components/Blog/EmptyBlog";
import Loading from "@/components/Loading";
import { useBlogs } from "@/hooks/useBlogs";

export default function BlogList() {
  const { data: blogs, error, isLoading } = useBlogs();

  if (isLoading) return <Loading />;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-12 my-25 px-4 sm:px-6 lg:px-8">
      {/* Título */}
      <div className="bg-gradient-01 rounded-full w-fit px-8 sm:px-12 py-3 mx-auto">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-01 font-cormorant text-center uppercase tracking-title"
        >
          Blogs
        </h2>
      </div>

      {/* Si no hay blogs */}
      {blogs?.length === 0 ? (
        <div className="text-center py-12">
          <EmptyBlog />
        </div>
      ) : (
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}

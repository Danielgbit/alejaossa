"use client";
import { useEffect, useState } from "react";
import type { Blog } from "@/types/blog";
import BlogCard from "@/components/Blog/BlogCard";

const BlogList = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div>
      <h2 className="text-xl font-bold">Mis Blogs</h2>
      <ul className="space-y-2 mt-4">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

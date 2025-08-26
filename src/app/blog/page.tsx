'use client';

import BlogCard from '@/components/Blog/BlogCard';
import { useBlogs } from '@/hooks/useBlogs';

export default function BlogList() {
  const { data: blogs, error, isLoading } = useBlogs();

  if (isLoading) return <div className="p-4">Loading blogs...</div>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
      
      {blogs?.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No blog posts yet.</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs?.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      )}
    </div>
  );
}
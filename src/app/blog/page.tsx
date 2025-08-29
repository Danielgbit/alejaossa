'use client';

import BlogCard from '@/components/Blog/BlogCard';
import EmptyBlog from '@/components/Blog/EmptyBlog';
import Loading from '@/components/Loading';
import { useBlogs } from '@/hooks/useBlogs';

export default function BlogList() {
  const { data: blogs, error, isLoading } = useBlogs();

  if (isLoading) return <Loading/>;
  if (error) return <div className="p-4 text-red-500">Error: {error.message}</div>;

  return (
    <div className="space-y-6">
      <h2 className="text-6xl bg-gradient-01 w-[30%] mx-auto rounded-full px-20 py-5 font-bold text-light-04 font-cormorant text-center my-40 uppercase
       tracking-title
      ">Blogs</h2>
      
      {blogs?.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            <EmptyBlog/>
          </p>
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
import blogs from "@/data/blogs";
import BlogCard from "@/components/BlogCard";

function BlogList() {
  return (
    <section className="py-16 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-cormorant font-bold text-center text-primary mb-12">
          Blog
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
}


export default BlogList;
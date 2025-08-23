import blogs from "@/data/blogs";
import { notFound } from "next/navigation";
import Image from "next/image";


function BlogDetail({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);

  if (!blog) return notFound();

  return (
    <article className="py-16 bg-light">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-cormorant font-bold text-primary mb-6">
          {blog.title}
        </h1>
        <p className="text-gray-500 mb-6">{blog.date}</p>

        <div className="w-full h-80 relative mb-8">
          <Image
            src={blog.imageUrl}
            alt={blog.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-700">{blog.content}</p>
      </div>
    </article>
  );
}

export default BlogDetail;

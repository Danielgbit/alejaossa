"use client";

import EditBlogForm from "@/components/Blog/EditBlogForm";
import { useBlogBySlug } from "@/hooks/useBlogs";
import { useRouter } from "next/navigation";

export default function EditBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data: blog, error, isLoading } = useBlogBySlug(slug);
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">Cargando blog...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-red-500 text-center">
          Error: {error.message}
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-8">
        <div className="text-center">Blog no encontrado</div>
        <button 
          onClick={() => router.push('/dashboard')}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Volver al Dashboard
        </button>
      </div>
    );
  }

  return <EditBlogForm blog={blog} />;
}
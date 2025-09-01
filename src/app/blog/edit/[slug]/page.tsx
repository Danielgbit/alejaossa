"use client";

import EditBlogForm from "@/components/Blog/EditBlogForm";
import { useBlogBySlug } from "@/hooks/useBlogs";
import { useRouter } from "next/navigation";

export default function EditBlogPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const { data: blog, error, isLoading } = useBlogBySlug(slug);
  const router = useRouter();

  const handleOnCancel = () => {
    router.push(`/blog/${slug}`);
  };

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
        <div className="text-red-500 text-center">Error: {error.message}</div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="container mx-auto py-8 text-center">
        <div className="text-dark-02">Blog no encontrado</div>
        <button
          onClick={() => router.push("/dashboard")}
          className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
        >
          Volver al Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 my-16 sm:my-20 lg:my-28">
      <EditBlogForm onCancel={handleOnCancel} blog={blog} />
    </div>
  );
}

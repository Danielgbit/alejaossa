// src/app/blog/[slug]/page.tsx
"use client";

import BlogDeleteButton from "@/components/Blog/BlogDeleteButton";
import BlogDetail from "@/components/Blog/BlogDetail";
import { useBlogBySlug } from "@/hooks/useBlogs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BlogDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { data: blog, error, isLoading } = useBlogBySlug(params.slug);
  const { data: session } = useSession();
  const router = useRouter();

  const redirectEdit = () => {
    router.push(`/blog/edit/${params.slug}`);
  };

  if (isLoading) return <div className="p-4">Loading blog...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!blog) return <div className="p-4">Blog not found</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BlogDetail blog={blog} />
      {session?.user && (
        <>
          <BlogDeleteButton
            onSuccess={() => router.push("/dashboard")}
            slug={blog.slug}
            title={blog.title}
          />
          <button
            className="bg-dark-01 rounded-full text-light-02 px-3 py-1 mx-5 cursor-pointer"
            onClick={redirectEdit}
          >
            Editar
          </button>
        </>
      )}
    </div>
  );
}

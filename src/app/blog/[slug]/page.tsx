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

  if (isLoading) return <div className="p-4">Loading blog...</div>;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!blog) return <div className="p-4">Blog not found</div>;

  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <BlogDetail blog={blog} />
      {session?.user && (
        <BlogDeleteButton
          onSuccess={() => router.push("/dashboard")}
          slug={blog.slug}
          title={blog.title}
        />
      )}
    </div>
  );
}

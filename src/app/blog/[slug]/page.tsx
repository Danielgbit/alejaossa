// src/app/blog/[slug]/page.tsx
"use client";

import BlogDeleteButton from "@/components/Blog/BlogDeleteButton";
import BlogDetail from "@/components/Blog/BlogDetail";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
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

  if (isLoading) return <Loading />;
  if (error)
    return <div className="p-4 text-red-500">Error: {error.message}</div>;
  if (!blog) return <div className="p-4">Blog not found</div>;

  return (
    <div className="max-w-4xl bg-light-02 rounded-xl shadow-lg mx-auto p-6 my-25">
      <BlogDetail blog={blog} />
      {session?.user && (
        <div className="flex align-center text-sm gap-3 items-center">
          <BlogDeleteButton
            onSuccess={() => router.push("/blog")}
            slug={blog.slug}
            title={blog.title}
          />
          <div onClick={redirectEdit}>
            <Button children="editar" className="button-01"/>
          </div>
        </div>
      )}
    </div>
  );
}

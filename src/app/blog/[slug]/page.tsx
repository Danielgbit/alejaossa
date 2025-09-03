// src/app/blog/[slug]/page.tsx
"use client";

import BlogDeleteButton from "@/components/Blog/BlogDeleteButton";
import BlogDetail from "@/components/Blog/BlogDetail";
import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { useBlogBySlug } from "@/hooks/useBlogs";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function BlogDetailPage(props: { params: { slug: string } }) {
  const { params } = props;
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
    <div className="w-full max-w-4xl bg-light-02 rounded-xl shadow-lg mx-auto p-4 sm:p-6 my-20 sm:my-20">
      <BlogDetail blog={blog} />
      {session?.user && (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-start gap-3 mt-6 text-sm">
          <BlogDeleteButton
            onSuccess={() => router.push("/blog")}
            slug={blog.slug}
            title={blog.title}
            className="w-full sm:w-auto"
          />
          <div onClick={redirectEdit}>
            <Button className="button-01 w-full sm:w-auto">Editar</Button>
          </div>
        </div>
      )}
    </div>
  );
}

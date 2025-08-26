
'use client'
import BlogForm from "@/components/Blog/BlogForm";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

function DashboardPage() {
  const { data: session } = useSession();

  if (!session?.user) return redirect("/login");

  return (
    <div className="p-10 flex flex-col gap-6 justify-center items-center">
      <h1 className="text-2xl font-bold font-lexend">Bienvenida Aleja!</h1>
      <p className="font-lexend tracking-sub text-sm">
        Aquí puedes crear y editar tus blogs ✍️
      </p>
      <BlogForm />
    </div>
  );
}

export default DashboardPage;

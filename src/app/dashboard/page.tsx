"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CreateBlogForm from "@/components/Blog/CreateBlogForm";

function DashboardPage() {
  const { data: session } = useSession();

  if (!session?.user) return redirect("/login");

  const router = useRouter();

  const handleSuccess = () => {
    // Redirigir al dashboard después de crear el blog
    router.push("/blog");
  };

  const handleCancel = () => {
    // Volver atrás
    router.back();
  };

  return (
    <div className="p-10 flex flex-col gap-6 justify-center items-center">
      <h1 className="text-2xl font-bold font-lexend">Bienvenida Aleja!</h1>
      <p className="font-lexend tracking-sub text-sm">
        Aquí puedes crear y editar tus blogs ✍️
      </p>
      <CreateBlogForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </div>
  );
}

export default DashboardPage;

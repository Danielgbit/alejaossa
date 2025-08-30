"use client";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import CreateBlogForm from "@/components/Blog/CreateBlogForm";
import { useEffect } from "react";
import Loading from "@/components/Loading";

function DashboardPage() {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/login");
    }
  }, [status]);

  const router = useRouter();

  const handleSuccess = () => {
    router.push("/blog");
  };

  const handleCancel = () => {
    router.back();
  };

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <div className="p-10 flex my-25 flex-col gap-6 justify-center items-center">
      <h1 className="text-2xl font-bold font-lexend">Bienvenida Aleja!</h1>
      <p className="font-lexend tracking-sub text-sm">
        Aquí puedes crear tus blogs ✍️
      </p>
      <CreateBlogForm onSuccess={handleSuccess} onCancel={handleCancel} />
    </div>
  );
}

export default DashboardPage;

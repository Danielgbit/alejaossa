import BlogForm from "@/components/Blog/BlogForm";

function DashboardPage() {
  return (
    <div className="p-10 flex flex-col gap-6 justify-center items-center">
      <h1 className="text-2xl font-bold">Bienvenida Aleja!</h1>
      <p>Aquí puedes crear y editar tus blogs ✍️</p>
      <BlogForm/>
    </div>
  );
}

export default DashboardPage;
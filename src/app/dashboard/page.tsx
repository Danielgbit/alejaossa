import { getServerSession } from "next-auth";
import authOptions from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <p className="text-center text-red-500">No tienes acceso. Inicia sesión.</p>;
  }

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Bienvenida {session.user?.name}</h1>
      <p>Aquí puedes crear y editar tus blogs ✍️</p>
    </div>
  );
}

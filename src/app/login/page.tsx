"use client";

import Button from "@/components/Button";
import Loading from "@/components/Loading";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const { data: session, status } = useSession();

  // ✅ Redirección correcta con useEffect
  useEffect(() => {
    if (session?.user) {
      router.push("/dashboard");
    }
  }, [session, router]);

  if (status === "loading") {
    return <Loading />;
  }

  if (session?.user) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const result = await signIn("credentials", {
        username,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError("Usuario o contraseña incorrectos ❌");
      } else if (result?.ok) {
        router.push("/dashboard");
        router.refresh(); // Forzar actualización del layout
      }
    } catch (err) {
      setError("Error al iniciar sesión");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[500px] py-40 flex items-center justify-center bg-light-02">
      <form
        onSubmit={handleSubmit}
        className="bg-light-03 p-8 rounded-xl shadow-md w-80"
      >
        <h1 className="text-xl font-semibold mb-5 font-lexend tracking-title text-center text-dark-01">
          Iniciar Sesión
        </h1>

        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-black text-sm tracking-[-0.3] p-2 rounded"
          required
          disabled={isLoading}
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border text-sm tracking-[-0.3] p-2 rounded mt-5"
          required
          disabled={isLoading}
        />

        {error && (
          <span className="text-red-800 font-lexend text-xs block mt-2">
            {error}
          </span>
        )}

        <button type="submit" className="w-full mt-5" disabled={isLoading}>
          <Button
            className={`btn-base button-01 ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? "Iniciando sesión..." : "Entrar"}
          </Button>
        </button>
      </form>
    </div>
  );
}

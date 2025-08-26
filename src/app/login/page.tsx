"use client";

import Button from "@/components/Button";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { data: session } = useSession();

  if (session?.user) {
    return redirect("/dashboard");
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn("credentials", {
      username,
      password,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };

  return (
    <div className="min-h-[500px] flex items-center justify-center bg-light-02">
      <form
        onSubmit={handleSubmit}
        className="bg-light-03 p-8 rounded-xl shadow-md w-80 space-y-4"
      >
        <h1 className="text-xl font-semibold font-lexend tracking-title text-center text-dark-01">
          Iniciar Sesión
        </h1>
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border border-black text-sm tracking-brand p-2 rounded"
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border text-sm tracking-brand p-2 rounded"
        />
        <button type="submit" className="w-full">
          <Button children={"Entrar"} className="btn-base button-01" />
        </button>
      </form>
    </div>
  );
}

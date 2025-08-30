// Logout.tsx - Versión con debug
"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";

const Logout = () => {
  const handleSignOut = async () => {
    console.log("Botón de logout clickeado"); // Debug 1
    try {
      console.log("Intentando cerrar sesión..."); // Debug 2
      await signOut({
        redirect: true,
        callbackUrl: "/",
      });
      console.log("Sesión cerrada exitosamente"); // Debug 3
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <button
      onClick={handleSignOut}
      className="flex items-center justify-center p-2 rounded-md hover:bg-purple-500 bg-purple-300 transition-colors duration-200 cursor-pointer" // Borde rojo para debug
      title="Cerrar sesión"
      aria-label="Cerrar sesión"
      style={{ zIndex: 1000 }} // Forzar visibilidad
    >
      <LogOut className="w-4 h-4 text-purple-900 hover:text-purple-100" />
    </button>
  );
};

export default Logout;
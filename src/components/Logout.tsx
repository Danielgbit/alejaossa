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
      className="flex items-center justify-center p-2 rounded-md hover:bg-gray-100 transition-colors duration-200 cursor-pointer border border-red-500" // Borde rojo para debug
      title="Cerrar sesión"
      aria-label="Cerrar sesión"
      style={{ zIndex: 1000 }} // Forzar visibilidad
    >
      <LogOut className="w-5 h-5 text-gray-600 hover:text-gray-800" />
    </button>
  );
};

export default Logout;
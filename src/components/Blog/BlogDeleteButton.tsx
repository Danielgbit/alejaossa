"use client";

import { useState } from "react";
import { useDeleteBlog } from "@/hooks/useBlogs";
import { BlogDeleteButtonProps } from "@/types/blogDeleteButton";

export default function BlogDeleteButton({
  slug,
  title,
  onSuccess,
  onError,
  variant = "text",
  className = "",
}: BlogDeleteButtonProps) {
  const [isConfirming, setIsConfirming] = useState(false);
  const { mutate: deleteBlog, isPending, error } = useDeleteBlog();

  const handleDelete = () => {
    if (!isConfirming) {
      setIsConfirming(true);
      setTimeout(() => setIsConfirming(false), 3000); // Reset después de 3 segundos
      return;
    }

    deleteBlog(slug, {
      onSuccess: () => {
        setIsConfirming(false);
        onSuccess?.();
      },
      onError: (error) => {
        setIsConfirming(false);
        onError?.(error);
      },
    });
  };

  const handleCancel = () => {
    setIsConfirming(false);
  };

  const getButtonText = () => {
    if (isPending) return "Eliminando...";
    if (isConfirming) return "¿Confirmar?";
    return variant === "icon" ? "🗑️" : "Eliminar";
  };

  const getButtonClass = () => {
    const baseClass = "transition-all duration-200 rounded";

    if (isPending) {
      return `${baseClass} bg-gray-400 text-white px-3 py-1 opacity-50 ${className}`;
    }

    if (isConfirming) {
      return `${baseClass} bg-red-600 text-white px-3 py-1 ${className}`;
    }

    return `${baseClass} bg-red-500 hover:bg-red-600 text-white px-3 py-1 ${className}`;
  };

  return (
    <div className="inline-flex items-center gap-2">
      <button
        onClick={handleDelete}
        disabled={isPending}
        className={getButtonClass()}
        title={`Eliminar blog: ${title}`}
        type="button"
      >
        {getButtonText()}
      </button>

      {isConfirming && (
        <button
          onClick={handleCancel}
          className="bg-gray-500 hover:bg-gray-600 text-white px-2 py-1 rounded text-sm"
          type="button"
        >
          Cancelar
        </button>
      )}

      {error && (
        <span className="text-red-500 text-sm ml-2">
          Error: {error.message}
        </span>
      )}
    </div>
  );
}

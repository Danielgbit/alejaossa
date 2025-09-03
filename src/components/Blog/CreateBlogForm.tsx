"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Blog } from "@/types/blog";
import { supabase } from "@/supabase/client";

interface CreateBlogFormProps {
  onSuccess?: (blog: Blog) => void;
  onCancel?: () => void;
}

function CreateBlogForm({ onSuccess, onCancel }: CreateBlogFormProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    imageUrl: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Auto-generar slug desde el título
    if (name === "title") {
      const generatedSlug = value
        .toLowerCase()
        .replace(/[^a-z0-9 -]/g, "") // Eliminar caracteres inválidos
        .replace(/\s+/g, "-") // Reemplazar espacios con guiones
        .replace(/-+/g, "-") // Reemplazar múltiples guiones con uno solo
        .trim();

      setFormData((prev) => ({
        ...prev,
        slug: generatedSlug,
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from("blogs")
        .insert({
          ...formData,
          date: new Date().toISOString(),
        })
        .select()
        .single();

      if (error) throw error;

      if (data && onSuccess) {
        onSuccess(data as Blog);
        router.push("/blog");
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error desconocido");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full md:max-w-sm max-w-4xl mx-auto p-6 bg-gradient-02 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-dark-01 font-cormorant text-center tracking-brand mb-8">
        Crear Nuevo Blog
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Título */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-dark-01 font-lexend tracking-title mb-1"
          >
            Título *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-xs border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Ingresa el título del blog"
          />
        </div>

        {/* Slug */}
        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-dark-01 font-lexend tracking-title mb-1"
          >
            Slug *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-xs border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="URL-amigable (se genera automáticamente)"
          />
          <p className="text-[12px] text-dark-01 tracking-sub font-lexend mt-1">
            Este será el identificador único en la URL
          </p>
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-dark-01 font-lexend tracking-title mb-1"
          >
            Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-xs border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Breve descripción del contenido del blog"
          />
        </div>

        {/* Imagen */}
        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-dark-01 font-lexend tracking-title mb-1"
          >
            URL de la Imagen *
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-xs border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="https://ejemplo.com/imagen.jpg"
          />
        </div>

        {/* Contenido */}
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-dark-01 font-lexend tracking-title mb-1"
          >
            Contenido *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-xs border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            placeholder="Escribe el contenido completo de tu blog aquí..."
          />
        </div>

        {/* Botones */}
        <div className="flex flex-col md:flex-row justify-end gap-3 pt-4">
          {onCancel && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-2 border cursor-pointer border-purple-500 font-lexend text-xs border-2 rounded-md text-purple-800 transition-colors duration-300 hover:text-white hover:bg-purple-400"
            >
              Cancelar
            </button>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-purple-400 border border-2 border-purple-500 font-lexend font-semibold tracking-brand text-purple-50 rounded-xl cursor-pointer hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Publicando..." : "Publicar Blog"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateBlogForm;

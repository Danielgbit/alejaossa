"use client";

import { useState, useEffect } from "react";
import { Blog } from "@/types/blog";
import { useRouter } from "next/navigation";
import { useUpdateBlog } from "@/hooks/useBlogs";

interface EditBlogFormProps {
  blog: Blog;
  onSuccess?: (updatedBlog: Blog) => void;
  onCancel?: () => void;
}

export default function EditBlogForm({
  blog,
  onSuccess,
  onCancel,
}: EditBlogFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const { mutate: updateBlog, isPending: isLoading } = useUpdateBlog();

  const [formData, setFormData] = useState({
    title: blog.title,
    slug: blog.slug,
    description: blog.description,
    content: blog.content,
    imageUrl: blog.imageUrl,
  });

  useEffect(() => {
    setFormData({
      title: blog.title,
      slug: blog.slug,
      description: blog.description,
      content: blog.content,
      imageUrl: blog.imageUrl,
    });
  }, [blog]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    updateBlog(
      { slug: blog.slug, data: formData },
      {
        onSuccess: (updatedBlog) => {
          if (onSuccess) {
            onSuccess(updatedBlog);
          } else {
            router.push("/blog/" + updatedBlog.slug);
          }
        },
        onError: (err) => {
          setError(err.message || "Error al actualizar el blog");
        },
      }
    );
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 sm:p-8 bg-gradient-02 rounded-lg shadow-md">
      <h2 className="text-xl sm:text-2xl text-center font-cormorant font-bold mb-8 text-dark-02 tracking-title">
        <span className="block font-lexend text-base sm:text-lg text-dark-02 mb-2">Editar</span>
        {blog.title}
      </h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Título */}
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-dark-01 font-lexend mb-1">
            Título *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Slug */}
        <div>
          <label htmlFor="slug" className="block text-sm font-medium text-dark-01 font-lexend mb-1">
            Slug *
          </label>
          <input
            type="text"
            id="slug"
            name="slug"
            value={formData.slug}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-dark-01 font-lexend mt-1">
            Identificador único en la URL (cambiar con precaución)
          </p>
        </div>

        {/* Descripción */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-dark-01 font-lexend mb-1">
            Descripción *
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Imagen */}
        <div>
          <label htmlFor="imageUrl" className="block text-sm font-medium text-dark-01 font-lexend mb-1">
            URL de la Imagen *
          </label>
          <input
            type="url"
            id="imageUrl"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Contenido */}
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-dark-01 font-lexend mb-1">
            Contenido *
          </label>
          <textarea
            id="content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            required
            rows={10}
            className="w-full px-3 py-2 border border-purple-500 font-lexend text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        {/* Botones */}
        <div className="flex flex-col sm:flex-row justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-purple-500 font-lexend text-sm rounded-md text-purple-800 hover:text-white hover:bg-purple-400 transition-colors"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-purple-500 font-lexend text-sm font-semibold text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}

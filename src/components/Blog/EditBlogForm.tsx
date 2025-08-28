// EditBlogForm.tsx - Versión optimizada con React Query
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
  onCancel 
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    updateBlog(
      { 
        slug: blog.slug, 
        data: formData 
      },
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
        }
      }
    );
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Editar Blog: {blog.title}</h2>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="slug"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">
            Identificador único en la URL (cambiar con precaución)
          </p>
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="imageUrl"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700 mb-1"
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
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
          >
            Cancelar
          </button>

          <button
            type="submit"
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Guardando..." : "Guardar Cambios"}
          </button>
        </div>
      </form>
    </div>
  );
}
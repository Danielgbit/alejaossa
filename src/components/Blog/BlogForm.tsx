"use client";

import { useState } from "react";
import type { Blog } from "@/types/blog";
import Button from "../Button";

interface BlogFormProps {
  onSubmit: (data: Blog) => void;
}

const BlogForm = ({ onSubmit }: BlogFormProps) => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const generateSlug = (text: string) =>
    text
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validar que la imagen sea URL externa
    if (!/^https?:\/\//.test(imageUrl)) {
      alert("La URL de la imagen debe ser externa (http o https)");
      return;
    }

    const newBlog: Blog = {
      id: Date.now(), // temporal, en prod se usaría un ID de la DB
      title,
      slug: generateSlug(title),
      description,
      content,
      imageUrl,
      date: new Date().toISOString(),
    };

    onSubmit(newBlog);

    // limpiar formulario
    setTitle("");
    setDescription("");
    setContent("");
    setImageUrl("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-light-01 text-dark-02 shadow-xl w-100 rounded-2xl p-6 flex flex-col gap-4"
    >
      <div>
        <label className="block font-normal text-xl font-cormorant tracking-brand mb-1">Título</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe el título del blog..."
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label className="block font-normal text-xl font-cormorant tracking-brand mb-1">Descripción</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Pequeño resumen del blog..."
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label className="block font-normal text-xl font-cormorant tracking-brand mb-1">Contenido</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Escribe aquí el contenido completo..."
          rows={6}
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <div>
        <label className="block font-normal text-xl font-cormorant tracking-brand mb-1">Imagen (solo URL externa)</label>
        <input
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://ejemplo.com/imagen.jpg"
          className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-primary text-white py-2 px-4 rounded-lg hover:bg-opacity-80 transition"
      >
        <Button children="Postear" className="btn-base button-01 bg-light-02"/>
      </button>
    </form>
  );
};

export default BlogForm;

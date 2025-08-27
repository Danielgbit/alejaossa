// src/services/blogService.ts
import { Blog } from "@/types/blog";

const API_BASE_URL = "/api/blogs";

export const blogService = {
  // GET all blogs
  async getAll(): Promise<Blog[]> {
    const response = await fetch("/api/blogs");

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  // GET blog by slug (¡IMPORTANTE! usa la nueva ruta)
  async getBySlug(slug: string): Promise<Blog> {
    const response = await fetch(`${API_BASE_URL}/slug/${slug}`);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  },


  //CREATE BLOG
  async create(blogData: Omit<Blog, "id">): Promise<Blog> {
    const response = await fetch("/api/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  

  // UPDATE blog
  async update(id: number, blogData: Partial<Blog>): Promise<Blog> {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blogData),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  // DELETE blog by slug
  async deleteBySlug(slug: string): Promise<void> {
    const response = await fetch(`${API_BASE_URL}/slug/${slug}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  },
};

// src/services/blogService.ts
import { Blog } from "@/types/blog";
import { supabase } from "@/supabase/client";

export const blogService = {
  async getAll() {
    const { data, error } = await supabase.from("blogs").select("*");
    if (error) throw error;
    return data;
  },

  // GET blog by slug
  async getBySlug(slug: string): Promise<Blog> {
    const { data, error } = await supabase
      .from("blogs")
      .select("*")
      .eq("slug", slug);
    if (error) throw error;
    return data[0];
  },

  async update(slug: string, blogData: Partial<Blog>) {
    const { data, error } = await supabase
      .from("blogs")
      .update(blogData)
      .eq("slug", slug)
      .select()
      .single(); // 👈 garantiza un solo objeto

    if (error) throw error;
    return data;
  },

  // DELETE blog by slug
  async deleteBySlug(slug: string) {
    const { error } = await supabase.from("blogs").delete().eq("slug", slug);
    if (error) throw error;
  },
};

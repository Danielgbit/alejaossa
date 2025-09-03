import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { blogService } from "@/services/blogService";
import { Blog } from "@/types/blog";

export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: blogService.getAll,
  });
};

export const useBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogService.getBySlug(slug),
    enabled: !!slug, // Solo ejecuta si hay un slug
  });
};

export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blogService.deleteBySlug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};

// Hook Update blog by slug
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<Blog> }) =>
      blogService.update(slug, data),

    onSuccess: (updatedBlog, variables) => {
      // Invalidar la lista completa de blogs
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      // Si el slug cambió, invalidar ambas queries
      if (variables.slug !== updatedBlog?.slug) {
        queryClient.invalidateQueries({ queryKey: ["blog", variables.slug] });
        queryClient.invalidateQueries({
          queryKey: ["blog", updatedBlog?.slug],
        });
      } else {
        queryClient.invalidateQueries({ queryKey: ["blog", variables.slug] });
      }

      // Actualizar cache directamente
      if (updatedBlog) {
        queryClient.setQueryData(["blog", updatedBlog.slug], updatedBlog);
      }
    },
  });
};

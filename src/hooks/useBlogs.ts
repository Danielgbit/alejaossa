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

export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blogService.create,
    onSuccess: (newBlog) => {
      // Invalidar y refetch la query de blogs
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      // Opcional: Actualizar el cache directamente
      queryClient.setQueryData(["blogs"], (oldBlogs: Blog[] | undefined) => {
        return oldBlogs ? [...oldBlogs, newBlog] : [newBlog];
      });
    },
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

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ slug, data }: { slug: string; data: Partial<Blog> }) =>
      blogService.update(slug, data),
    onSuccess: (updatedBlog, variables) => {
      // Invalidar y refetch las queries
      queryClient.invalidateQueries({ queryKey: ["blogs"] });

      // Si el slug cambió, invalidar ambas queries (vieja y nueva)
      if (variables.slug !== updatedBlog.slug) {
        queryClient.invalidateQueries({ queryKey: ["blog", variables.slug] });
        queryClient.invalidateQueries({ queryKey: ["blog", updatedBlog.slug] });
      } else {
        queryClient.invalidateQueries({ queryKey: ["blog", variables.slug] });
      }

      // Actualizar el cache directamente
      queryClient.setQueryData(["blog", updatedBlog.slug], updatedBlog);
    },
  });
};

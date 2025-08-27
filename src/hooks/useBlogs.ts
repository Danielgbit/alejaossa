import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';
import { Blog } from '@/types/blog';

export const useBlogs = () => {
  return useQuery({
    queryKey: ['blogs'],
    queryFn: blogService.getAll,
  });
};

export const useBlogBySlug = (slug: string) => {
  return useQuery({
    queryKey: ['blog', slug],
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
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      
      // Opcional: Actualizar el cache directamente
      queryClient.setQueryData(['blogs'], (oldBlogs: Blog[] | undefined) => {
        return oldBlogs ? [...oldBlogs, newBlog] : [newBlog];
      });
    },
  });
};

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: Partial<Blog> }) => 
      blogService.update(id, data),
    onSuccess: (updatedBlog) => {
      // Actualizar tanto la lista como el blog individual
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      queryClient.invalidateQueries({ queryKey: ['blog', updatedBlog.id] });
    },
  });
};


export const useDeleteBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blogService.deleteBySlug,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
    },
  });
};
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
    enabled: !!slug, 
  });
};
export const useCreateBlog = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: blogService.create,
    onSuccess: () => {
      // Invalidar la query de blogs para que se vuelva a cargar
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
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
    mutationFn: blogService.delete,
    onSuccess: (_, deletedId) => {
      // Invalidar queries después de eliminar
      queryClient.invalidateQueries({ queryKey: ['blogs'] });
      queryClient.removeQueries({ queryKey: ['blog', deletedId] });
    },
  });
};
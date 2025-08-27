interface BlogDeleteButtonProps {
  slug: string;
  title: string;
  onSuccess?: () => void;
  onError?: ((error: Error) => void);
  variant?: 'icon' | 'text' | 'full';
  className?: string;
}

export type { BlogDeleteButtonProps };
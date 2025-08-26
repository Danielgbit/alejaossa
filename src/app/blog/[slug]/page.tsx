import { notFound } from 'next/navigation';
import BlogDetail from '@/components/Blog/BlogDetail';
import { blogService } from '@/services/blogService';

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  
  try {
    const blog = await blogService.getBySlug(slug);
    return <BlogDetail blog={blog} />;
  } catch (error) {
    notFound();
  }
}
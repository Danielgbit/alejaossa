import { Blog } from '@/types/blog';

export interface BlogMetadata extends Pick<Blog, 'title' | 'description' | 'imageUrl' | 'date' | 'slug'> {
  authors?: string[];
  tags?: string[];
}

export interface DefaultMetadataConfig {
  title: string;
  description: string;
  siteName: string;
  baseUrl: string;
  defaultImage: string;
  twitterHandle?: string;
  fbAppId?: string;
}
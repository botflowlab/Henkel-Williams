export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const defaultSEO: SEOConfig = {
  title: 'Henkel-Williams Real Estate | Premium Properties & Expert Service',
  description: 'Discover your dream home with Henkel-Williams Real Estate. Expert agents, premium properties, and personalized service in luxury real estate.',
  keywords: 'real estate, luxury homes, property sales, real estate agent, premium properties',
  type: 'website'
};

export const generateSEOTags = (config: Partial<SEOConfig> = {}) => {
  const seo = { ...defaultSEO, ...config };
  
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    openGraph: {
      title: seo.title,
      description: seo.description,
      type: seo.type,
      image: seo.image,
      url: seo.url
    }
  };
};
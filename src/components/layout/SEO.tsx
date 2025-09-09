import { Helmet } from 'react-helmet-async';
import { defaultSEO } from '../../utils/seoConfig';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  ogImage, 
  ogUrl 
}: SEOProps) {
  const seoTitle = title ? `${title} | ${defaultSEO.title}` : defaultSEO.title;
  const seoDescription = description || defaultSEO.description;
  const seoKeywords = keywords || defaultSEO.keywords;
  const seoOgImage = ogImage || defaultSEO.ogImage;
  const seoOgUrl = ogUrl || defaultSEO.ogUrl;

  return (
    <Helmet>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <meta name="keywords" content={seoKeywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={seoOgImage} />
      <meta property="og:url" content={seoOgUrl} />
      <meta property="og:type" content="website" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={seoOgImage} />
    </Helmet>
  );
}
import { Helmet } from 'react-helmet-async';
import { SEOConfig, generateSEOTags } from '../../utils/seo';

interface SEOProps extends Partial<SEOConfig> {}

export const SEO: React.FC<SEOProps> = (props) => {
  const seoTags = generateSEOTags(props);

  return (
    <Helmet>
      <title>{seoTags.title}</title>
      <meta name="description" content={seoTags.description} />
      {seoTags.keywords && <meta name="keywords" content={seoTags.keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={seoTags.openGraph.title} />
      <meta property="og:description" content={seoTags.openGraph.description} />
      <meta property="og:type" content={seoTags.openGraph.type} />
      {seoTags.openGraph.image && <meta property="og:image" content={seoTags.openGraph.image} />}
      {seoTags.openGraph.url && <meta property="og:url" content={seoTags.openGraph.url} />}
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTags.title} />
      <meta name="twitter:description" content={seoTags.description} />
      {seoTags.openGraph.image && <meta name="twitter:image" content={seoTags.openGraph.image} />}
    </Helmet>
  );
};
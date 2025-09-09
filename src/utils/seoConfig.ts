export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

export const defaultSEO: SEOConfig = {
  title: "Henkel-Williams Real Estate",
  description: "Professional real estate services for buying, selling, and investing in properties.",
  keywords: "real estate, property, homes, buying, selling, investment",
  ogImage: "/og-image.jpg",
  ogUrl: "https://henkel-williams.com"
};
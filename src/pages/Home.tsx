import { SEO } from '../components/layout/SEO';
import { HomeHero } from '../components/sections/HomeHero';
import { HomeFeatures } from '../components/sections/HomeFeatures';
import { HomeTestimonials } from '../components/sections/HomeTestimonials';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Henkel-Williams Real Estate | Premium Properties & Expert Service"
        description="Discover your dream home with Henkel-Williams Real Estate. Expert agents, premium properties, and personalized service in luxury real estate."
      />
      <HomeHero />
      <HomeFeatures />
      <HomeTestimonials />
    </>
  );
};
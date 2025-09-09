import SEO from '../../components/layout/SEO';
import HomeHero from '../../components/sections/home/HomeHero';

export default function Home() {
  return (
    <>
      <SEO 
        title="Home"
        description="Find your dream home with Henkel-Williams Real Estate. Professional real estate services for buying, selling, and investing."
      />
      <HomeHero />
    </>
  );
}
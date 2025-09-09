import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Dream Home</h1>
          <p className="hero-subtitle">
            Discover exceptional properties with Henkel-Williams Real Estate. 
            We help you buy, sell, and invest in the perfect property.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </div>
    </section>
  );
}
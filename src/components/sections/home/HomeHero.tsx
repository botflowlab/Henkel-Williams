import Button from '../../ui/Button';
import './HomeHero.css';

export default function HomeHero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <img 
          src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
          alt="Modern luxury home exterior" 
          className="hero-bg-image"
        />
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Find Your Dream Home
          </h1>
          <p className="hero-description">
            Discover exceptional properties with Henkel-Williams Real Estate. 
            We help you buy, sell, and invest in the perfect property with 
            personalized service and expert guidance.
          </p>
          <div className="hero-actions">
            <Button className="hero-btn-primary">Explore Properties</Button>
            <Button variant="secondary" className="hero-btn-secondary">Contact Us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
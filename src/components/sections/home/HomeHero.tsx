import Button from '../../ui/Button';

export default function HomeHero() {
  return (
    <section style={{
      backgroundImage: 'url(/src/assets/images/template website.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#FBF2E9',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1>Find Your Dream Home</h1>
      <p>Discover exceptional properties with Henkel-Williams Real Estate. We help you buy, sell, and invest in the perfect property.</p>
      <button>Get Started</button>
    </section>
  );
}
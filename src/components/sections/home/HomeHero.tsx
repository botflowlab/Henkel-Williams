import Button from '../../ui/Button';

export default function HomeHero() {
  return (
    <section style={{
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100vw',
      height: '100vh',
      margin: '0',
      padding: '0',
      backgroundImage: 'url(/src/assets/images/templatewebsite.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      color: '#FBF2E9',
      zIndex: '1'
    }}>
      <h1>Find Your Dream Home</h1>
      <p>Discover exceptional properties with Henkel-Williams Real Estate. We help you buy, sell, and invest in the perfect property.</p>
      <Button>Get Started</Button>
    </section>
  );
}
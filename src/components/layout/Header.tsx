import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past 100px
        setIsVisible(false);
      } else {
        // Scrolling up or at top
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      position: 'fixed',
      left: '0',
      right: '0',
      zIndex: '1000',
      flexWrap: 'wrap',
      minHeight: '70px',
    }}>
      {/* Left: Brand */}
      <div style={{
        fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
        fontSize: 'clamp(1.5rem, 4vw, 2.25rem)',
        fontWeight: '800',
        color: '#FBF2E9',
        flex: '0 0 auto',
        marginRight: '1rem'
      }}>
        LUXURY REAL ESTATE
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMenu}
        style={{
          display: 'none',
          flexDirection: 'column',
          justifyContent: 'space-around',
          width: '30px',
          height: '30px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: '0',
          zIndex: '10'
        }}
        className="mobile-menu-btn"
      >
        <span style={{
          width: '100%',
          height: '3px',
          background: '#FBF2E9',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          transformOrigin: '1px'
        }}></span>
        <span style={{
          width: '100%',
          height: '3px',
          background: '#FBF2E9',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          transformOrigin: '1px'
        }}></span>
        <span style={{
          width: '100%',
          height: '3px',
          background: '#FBF2E9',
          borderRadius: '10px',
          transition: 'all 0.3s linear',
          transformOrigin: '1px'
        }}></span>
      </button>

      {/* Navigation - Desktop */}
      <nav style={{
        display: 'flex',
        gap: 'clamp(1.5rem, 3vw, 2.5rem)',
        alignItems: 'center',
        flex: '1',
        justifyContent: 'center',
        maxWidth: '600px'
      }} className="desktop-nav">
        <Link to="/listings" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
          fontWeight: '500',
          color: '#FBF2E9',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>
          Listings
        </Link>
        <Link to="/team" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
          fontWeight: '500',
          color: '#FBF2E9',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>
          Team
        </Link>
        <Link to="/process" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
          fontWeight: '500',
          color: '#FBF2E9',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>
          Process
        </Link>
        <Link to="/blog" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
          fontWeight: '500',
          color: '#FBF2E9',
          textDecoration: 'none',
          transition: 'color 0.3s ease',
          whiteSpace: 'nowrap'
        }}>
          Blog
        </Link>
      </nav>

      {/* Mobile Navigation */}
      <nav style={{
        display: isMenuOpen ? 'flex' : 'none',
        flexDirection: 'column',
        position: 'absolute',
        top: '100%',
        left: '0',
        right: '0',
        backgroundColor: '#FBF2E9',
        padding: '1rem 2rem',
        gap: '1rem',
        borderTop: '1px solid #0c0c0c',
        zIndex: '5'
      }} className="mobile-nav">
        <Link to="/listings" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          padding: '0.5rem 0',
          borderBottom: '1px solid rgba(12, 12, 12, 0.1)'
        }} onClick={() => setIsMenuOpen(false)}>
          Listings
        </Link>
        <Link to="/team" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          padding: '0.5rem 0',
          borderBottom: '1px solid rgba(12, 12, 12, 0.1)'
        }} onClick={() => setIsMenuOpen(false)}>
          Team
        </Link>
        <Link to="/process" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          padding: '0.5rem 0',
          borderBottom: '1px solid rgba(12, 12, 12, 0.1)'
        }} onClick={() => setIsMenuOpen(false)}>
          Process
        </Link>
        <Link to="/blog" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '1.1rem',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          padding: '0.5rem 0',
          borderBottom: '1px solid rgba(12, 12, 12, 0.1)'
        }} onClick={() => setIsMenuOpen(false)}>
          Blog
        </Link>
        <button style={{
          backgroundColor: '#FBF2E9',
          color: '#0c0c0c',
          border: '2px solid #0c0c0c',
          borderRadius: '25px',
          padding: '12px 24px',
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '0.9rem',
          fontWeight: '600',
          letterSpacing: '1px',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          marginTop: '1rem',
          alignSelf: 'flex-start'
        }}>
          GET IN TOUCH
        </button>
      </nav>

      {/* Right: CTA Button - Desktop */}
      <button style={{
        backgroundColor: '#FBF2E9',
        color: '#0c0c0c',
        border: '2px solid #0c0c0c',
        borderRadius: '25px',
        padding: 'clamp(8px, 1.5vw, 12px) clamp(16px, 3vw, 24px)',
        fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
        fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        flex: '0 0 auto',
        whiteSpace: 'nowrap'
      }} className="desktop-cta">
        GET IN TOUCH
      </button>

      <style>{`
        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex !important;
          }
          .desktop-nav {
            display: none !important;
          }
          .desktop-cta {
            display: none !important;
          }
        }
        
        @media (min-width: 769px) {
          .mobile-nav {
            display: none !important;
          }
        }
        
        @media (max-width: 480px) {
          header {
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </header>
  );
}
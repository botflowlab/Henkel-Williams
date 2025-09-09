import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
    }}>
      {/* Left: Brand */}
      <div style={{
        fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
        fontSize: '18px',
        fontWeight: '600',
        color: '#0c0c0c',
        marginLeft: '20px'
      }}>
        Luxury Real Estate
      </div>

      {/* Center: Navigation */}
      <nav style={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center'
      }}>
        <Link to="/listings" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>
          Listings
        </Link>
        <Link to="/team" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>
          Team
        </Link>
        <Link to="/process" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>
          Process
        </Link>
        <Link to="/blog" style={{
          fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: '500',
          color: '#0c0c0c',
          textDecoration: 'none',
          transition: 'color 0.3s ease'
        }}>
          Blog
        </Link>
      </nav>
      {/* Right: CTA Button */}
      <button style={{
        backgroundColor: '#FBF2E9',
        color: '#0c0c0c',
        border: '2px solid #0c0c0c',
        borderRadius: '25px',
        padding: '12px 24px',
        fontFamily: 'PP Neue Montreal, Montserrat, sans-serif',
        fontSize: '14px',
        fontWeight: '600',
        letterSpacing: '1px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        marginRight: '20px'
      }}>
        GET IN TOUCH
      </button>
    </header>
  );
}
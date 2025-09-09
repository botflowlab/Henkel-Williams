import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NAVIGATION_ITEMS, SITE_CONFIG } from '../../utils/constants';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-slate-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <a href={`tel:${SITE_CONFIG.phone}`} className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                <Phone size={14} />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="flex items-center space-x-1 hover:text-blue-300 transition-colors">
                <Mail size={14} />
                <span>{SITE_CONFIG.email}</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HW</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">{SITE_CONFIG.name}</h1>
              <p className="text-sm text-slate-600">{SITE_CONFIG.tagline}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-slate-700 hover:text-blue-600 transition-colors font-medium ${
                  location.pathname === item.href ? 'text-blue-600' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-slate-200"
        >
          <nav className="px-4 py-4 space-y-2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-slate-50 transition-colors ${
                  location.pathname === item.href ? 'text-blue-600 bg-blue-50' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
};
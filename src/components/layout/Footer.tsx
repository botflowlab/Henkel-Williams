import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG, NAVIGATION_ITEMS } from '../../utils/constants';
import { NewsletterForm } from '../ui/NewsletterForm';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">HW</span>
              </div>
              <h3 className="text-lg font-bold">{SITE_CONFIG.name}</h3>
            </div>
            <p className="text-slate-300 mb-4">{SITE_CONFIG.tagline}</p>
            <div className="flex space-x-4">
              <a
                href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={SITE_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>{SITE_CONFIG.phone}</span>
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="flex items-center space-x-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>{SITE_CONFIG.email}</span>
              </a>
              <div className="flex items-start space-x-2 text-slate-300">
                <MapPin size={16} className="mt-1 flex-shrink-0" />
                <span>{SITE_CONFIG.address}</span>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-slate-300 mb-4">
              Get the latest property listings and market insights.
            </p>
            <NewsletterForm />
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>&copy; {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
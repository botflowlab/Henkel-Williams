import NewsletterForm from '../ui/NewsletterForm';

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h2>Henkel-Williams Real Estate</h2>
          <p>Your trusted partner in real estate since 1985.</p>
        </div>
        
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3>Contact Info</h3>
          <address>
            <p>123 Real Estate Ave</p>
            <p>City, State 12345</p>
            <p>Phone: (555) 123-4567</p>
            <p>Email: info@henkel-williams.com</p>
          </address>
        </div>
        
        <div>
          <NewsletterForm />
        </div>
      </div>
      
      <div>
        <p>&copy; 2024 Henkel-Williams Real Estate. All rights reserved.</p>
      </div>
    </footer>
  );
}
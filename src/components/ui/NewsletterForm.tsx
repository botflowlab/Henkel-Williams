import { FormEvent, useState } from 'react';
import Button from './Button';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic will be implemented later
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Subscribe to Our Newsletter</h3>
      <p>Get the latest real estate news and property updates.</p>
      <div>
        <label htmlFor="newsletter-email">Email Address</label>
        <input
          type="email"
          id="newsletter-email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <Button type="submit">Subscribe</Button>
      </div>
    </form>
  );
}
import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ margin: 0, padding: 0 }}>
      <Header />
      <main style={{ margin: 0, padding: 0 }}>
        {children}
      </main>
      <Footer />
    </div>
  );
}
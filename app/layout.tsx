import type { ReactNode } from 'react';
import Link from 'next/link';
import './globals.css';

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru">
      <body>
        <nav style={{ padding: '16px', borderBottom: '1px solid #ccc' }}>
          <Link href="/" style={{ marginRight: '16px' }}>Главная</Link>
          <Link href="/about" style={{ marginRight: '16px' }}>О нас</Link>
          <Link href="/blog" style={{ marginRight: '16px' }}>Блог</Link>
        </nav>
        <main style={{ padding: '24px' }}>{children}</main>
      </body>
    </html>
  );
}
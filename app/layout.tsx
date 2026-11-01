import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'My Next App',
  description: 'структура проекта next.js, серверные и клиентские компоненты',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
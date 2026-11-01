import type { ReactNode } from 'react';

interface CoursesLayoutProps {
  children: ReactNode;
}

export default function CoursesLayout({ children }: CoursesLayoutProps) {
  return (
    <section style={{ border: '1px solid #999', padding: '16px', marginTop: '16px' }}>
      <h2>Каталог курсов</h2>
      <p>Здесь можно посмотреть доступные курсы.</p>
      {children}
    </section>
  );
}
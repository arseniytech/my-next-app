import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Главная</h1>
      <ul>
        <li><Link href="/server-demo">Server Component</Link></li>
        <li><Link href="/client-demo">Client Component</Link></li>
        <li><Link href="/greet-demo">Server Function</Link></li>
        <li><Link href="/about">О нас</Link></li>
        <li><Link href="/blog/nextjs-vvedenie">Блог</Link></li>
        <li><Link href="/products/1">Товар</Link></li>
      </ul>
    </main>
  );
}
// Server Component (по умолчанию) — нет директивы в начале файла
import { Suspense } from 'react';
import { connection } from 'next/server';

async function ServerTime() {
  await connection(); // не кэшируем, рендер по запросу
  const time = new Date().toISOString();
  return <p>Время на сервере: {time}</p>;
}

export default async function ServerDemo() {
  console.log('Это сообщение появится в терминале, а не в браузере');
  return (
    <div>
      <h1>Server Component</h1>
      <Suspense fallback={<p>Загрузка...</p>}>
        <ServerTime />
      </Suspense>
    </div>
  );
}
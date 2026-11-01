// параметр динамический, рендерим при запросе
export const instant = false;

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  return (
    <div>
      <h1>Пост №{id}</h1>
      <p>Это содержимое поста с идентификатором {id}.</p>
    </div>
  );
}
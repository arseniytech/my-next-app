// id курса приходит из url, рендерим при запросе
export const instant = false;

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

const courses: Record<string, string> = {
  '1': 'Основы JavaScript',
  '2': 'React для начинающих',
  '3': 'TypeScript практика',
};

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const title = courses[id];

  if (!title) {
    return (
      <div>
        <h1>Курс не найден</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{title}</h1>
      <p>Это страница курса с идентификатором {id}.</p>
    </div>
  );
}
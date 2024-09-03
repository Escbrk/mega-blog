import { getAllArticles } from './(server)/api';
import { ROUTING } from './routing';
import { AppLink } from './shared/components/app-link';

export default async function Home({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const page = Number.parseInt(searchParams['page'] ?? 1)
  const allArticles = await getAllArticles();
  return (
    <>
      <h1>Mega-Blog, page: {page}</h1>
      <ul>
        {allArticles.map((article) => (
          <li key={article.name}>
            <AppLink href={ROUTING.article(article.name)}>
              {article.header}
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}

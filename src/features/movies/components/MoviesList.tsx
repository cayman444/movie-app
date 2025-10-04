import { Container } from '@/app/layouts';
import { useGetMoviesQuery } from '@/shared/api/endpoints';
import { MOVIES_ROUTES } from '@/shared/constants';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';

export const MoviesList = () => {
  const { data: movies } = useGetMoviesQuery({});

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">{MOVIES_ROUTES.MOVIES.title}</h1>
      <ul>{movies?.items.map((movie) => movie.nameRu)}</ul>
    </Container>
  );
};

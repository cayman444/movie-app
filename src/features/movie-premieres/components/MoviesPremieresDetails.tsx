import { Container } from '@/app/layouts';
import { useGetPremieresMoviesQuery } from '@/shared/api/endpoints';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { MoviePremiereDetails } from './MoviePremiereDetails';

export const MoviesPremieresDetails = () => {
  const { data } = useGetPremieresMoviesQuery({
    month: 'DECEMBER',
    year: 2025,
  });

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6"></h1>
      <ul className="grid grid-cols-5 gap-x-4 gap-y-8 mb-12">
        {data?.items.map((movie) => (
          <MoviePremiereDetails key={movie.kinopoiskId} {...movie} />
        ))}
      </ul>
    </Container>
  );
};

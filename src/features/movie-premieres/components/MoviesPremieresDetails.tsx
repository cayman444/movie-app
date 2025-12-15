import { Container } from '@/app/layouts';
import { MoviesListSkeleton } from '@/features/movies/ui';
import { useGetPremieresMoviesQuery } from '@/shared/api/endpoints';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { MoviePremiereDetails } from './MoviePremiereDetails';

export const MoviesPremieresDetails = () => {
  const { data, isFetching } = useGetPremieresMoviesQuery({
    month: 'DECEMBER',
    year: 2025,
  });

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">Кинопремьеры</h1>
      {isFetching ? (
        <MoviesListSkeleton hasPagination={false} />
      ) : (
        <ul className="grid grid-cols-5 gap-x-4 gap-y-8">
          {data?.items.map((movie) => (
            <MoviePremiereDetails key={movie.kinopoiskId} {...movie} />
          ))}
        </ul>
      )}
    </Container>
  );
};

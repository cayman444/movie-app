import { Container } from '@/app/layouts';
import { MoviesListSkeleton } from '@/features/movies/ui';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMoviesPremieresDetails } from '../hooks';
import { MoviePremiereDetails } from './MoviePremiereDetails';
import { MoviesPremieresFilters } from './MoviesPremieresFilters';

export const MoviesPremieresDetails = () => {
  const { premieres, isFetching, ...premieresFilters } =
    useMoviesPremieresDetails();

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">Кинопремьеры</h1>
      <MoviesPremieresFilters isFetching={isFetching} {...premieresFilters} />
      {isFetching ? (
        <MoviesListSkeleton hasPagination={false} />
      ) : (
        <ul className="grid grid-cols-5 gap-x-4 gap-y-8">
          {premieres?.items.map((movie) => (
            <MoviePremiereDetails key={movie.kinopoiskId} {...movie} />
          ))}
        </ul>
      )}
    </Container>
  );
};

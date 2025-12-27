import { MOVIES_ROUTES } from '@/shared/constants';
import { useCollectionMovies } from '../hooks';
import { MoviesCollection } from './MoviesCollection';

export const MoviesAllCollections = () => {
  const {
    popularMovies,
    popularMoviesIsLoading,
    popularSeries,
    popularSeriesIsLoading,
    familyMovies,
    familyMoviesIsLoading,
  } = useCollectionMovies();

  return (
    <div className="flex flex-col gap-12">
      <MoviesCollection
        title={MOVIES_ROUTES.POPULAR.title}
        link={MOVIES_ROUTES.POPULAR.path}
        movies={popularMovies?.items}
        isLoading={popularMoviesIsLoading}
      />
      <MoviesCollection
        title={MOVIES_ROUTES.POPULAR_SERIALS.title}
        link={MOVIES_ROUTES.POPULAR_SERIALS.path}
        movies={popularSeries?.items}
        isLoading={popularSeriesIsLoading}
      />
      <MoviesCollection
        title={MOVIES_ROUTES.FAMILY_MOVIES.title}
        link={MOVIES_ROUTES.FAMILY_MOVIES.path}
        movies={familyMovies?.items}
        isLoading={familyMoviesIsLoading}
      />
    </div>
  );
};

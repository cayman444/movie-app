import { MOVIES_PATHS } from '@/shared/constants';
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
    <div className="flex flex-col gap-18 mb-18">
      <MoviesCollection
        title={MOVIES_PATHS.POPULAR.title}
        link={MOVIES_PATHS.POPULAR.path}
        movies={popularMovies?.items}
        isLoading={popularMoviesIsLoading}
      />
      <MoviesCollection
        title={MOVIES_PATHS.POPULAR_SERIALS.title}
        link={MOVIES_PATHS.POPULAR_SERIALS.path}
        movies={popularSeries?.items}
        isLoading={popularSeriesIsLoading}
      />
      <MoviesCollection
        title={MOVIES_PATHS.FAMILY_MOVIES.title}
        link={MOVIES_PATHS.FAMILY_MOVIES.path}
        movies={familyMovies?.items}
        isLoading={familyMoviesIsLoading}
      />
    </div>
  );
};

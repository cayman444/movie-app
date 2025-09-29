import { useCollectionMovies } from '../hooks';
import { MoviesCollection } from './MoviesCollection';

export const MoviesAllCollections = () => {
  const {
    popularMovies,
    popularMoviesIsLoading,
    popularSeries,
    popularSeriesIsLoading,
    popularAnimations,
    popularAnimationsIsLoading,
  } = useCollectionMovies();

  return (
    <div className="flex flex-col gap-18 mb-18">
      <MoviesCollection
        title="Популярные фильмы"
        link="/popular"
        movies={popularMovies?.items}
        isLoading={popularMoviesIsLoading}
      />
      <MoviesCollection
        title="Популярные сериалы"
        link="/series"
        movies={popularSeries?.items}
        isLoading={popularSeriesIsLoading}
      />
      <MoviesCollection
        title="Популярные мультфильмы"
        link="/animations"
        movies={popularAnimations?.items}
        isLoading={popularAnimationsIsLoading}
      />
    </div>
  );
};

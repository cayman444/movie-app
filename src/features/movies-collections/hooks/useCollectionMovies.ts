import { useGetCollectionsMoviesQuery } from '@/shared/api/endpoints';

export const useCollectionMovies = () => {
  const { data: popularMovies, isLoading: popularMoviesIsLoading } =
    useGetCollectionsMoviesQuery({
      page: 1,
      type: 'TOP_POPULAR_MOVIES',
    });

  const { data: popularSeries, isLoading: popularSeriesIsLoading } =
    useGetCollectionsMoviesQuery({
      page: 1,
      type: 'POPULAR_SERIES',
    });

  const { data: familyMovies, isLoading: familyMoviesIsLoading } =
    useGetCollectionsMoviesQuery({
      page: 1,
      type: 'FAMILY',
    });

  return {
    popularMovies,
    popularMoviesIsLoading,
    popularSeries,
    popularSeriesIsLoading,
    familyMovies,
    familyMoviesIsLoading,
  };
};

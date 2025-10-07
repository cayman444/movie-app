import { Container } from '@/app/layouts';
import { MOVIES_ROUTES, PAGE_SIZE } from '@/shared/constants';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { Pagination } from 'antd';
import { useMovies } from '../hooks';
import { MoviesListSkeleton } from '../ui';
import { MovieItem } from './MovieItem';
import { MoviesFilters } from './MoviesFilters';

export const MoviesList = () => {
  const { movies, page, isFetching, onChangePage } = useMovies();

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">{MOVIES_ROUTES.MOVIES.title}</h1>
      <MoviesFilters className="mb-8" />
      {isFetching ? (
        <MoviesListSkeleton />
      ) : (
        <>
          <ul className="grid grid-cols-5 gap-x-4 gap-y-8 mb-12">
            {movies?.items.map((movie) => (
              <MovieItem key={movie.kinopoiskId} {...movie} />
            ))}
          </ul>
          <Pagination
            align="center"
            showSizeChanger={false}
            current={page}
            onChange={onChangePage}
            total={movies?.total}
            pageSize={PAGE_SIZE}
          />
        </>
      )}
    </Container>
  );
};

import { Container } from '@/app/layouts';
import type { MovieLinkWithoutPath } from '@/entities/movie/types';
import { PAGE_SIZE } from '@/shared/constants';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { Pagination } from 'antd';
import type { FC } from 'react';
import { useMovies } from '../hooks';
import { MoviesListSkeleton } from '../ui';
import { MovieItem } from './MovieItem';
import { MoviesFilters } from './MoviesFilters';

export const MoviesList: FC<MovieLinkWithoutPath> = ({ title, movieType }) => {
  const { movies, page, isFetching, onChangePage } = useMovies(movieType);

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      <MoviesFilters className="mb-8" movieType={movieType} />
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
            hideOnSinglePage
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

import { Container } from '@/app/layouts';
import { MovieItem } from '@/features/movies/components';
import { MoviesListSkeleton } from '@/features/movies/ui';
import { PAGE_SIZE } from '@/shared/constants';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { Pagination } from 'antd';
import { type FC } from 'react';
import { useSelectionMovies } from '../hooks';
import type { MoviesSelection } from '../types';

export const MoviesAllSelection: FC<MoviesSelection> = ({ title, type }) => {
  const { selectionMovies, isFetching, page, onChangePage } =
    useSelectionMovies(type);

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      {isFetching ? (
        <MoviesListSkeleton />
      ) : (
        <>
          <ul className="grid grid-cols-5 gap-x-4 gap-y-8 mb-12">
            {selectionMovies?.items.map((params) => (
              <MovieItem key={params.kinopoiskId} {...params} />
            ))}
          </ul>
          <Pagination
            hideOnSinglePage
            align="center"
            showSizeChanger={false}
            current={page}
            onChange={onChangePage}
            total={selectionMovies?.total}
            pageSize={PAGE_SIZE}
          />
        </>
      )}
    </Container>
  );
};

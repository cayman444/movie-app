import { Container } from '@/app/layouts';
import { useGetCollectionsMoviesQuery } from '@/shared/api/endpoints';
import { Pagination, type PaginationProps } from 'antd';
import { type FC, useState } from 'react';
import type { MoviesSelection } from '../types';
import { MoviesSelectionSkeleton } from '../ui';
import { MovieCollection } from './MovieCollection';

export const MoviesAllSelection: FC<MoviesSelection> = ({ title, type }) => {
  const [page, setPage] = useState(1);
  const { data: selectionMovies, isLoading } = useGetCollectionsMoviesQuery({
    page,
    type,
  });

  const onChangePage: PaginationProps['onChange'] = (page) => {
    setPage(page);
  };

  return (
    <Container>
      <h1 className="text-2xl font-bold mb-6">{title}</h1>
      {isLoading ? (
        <MoviesSelectionSkeleton />
      ) : (
        <>
          <ul className="grid grid-cols-5 gap-x-4 gap-y-8 mb-12">
            {selectionMovies?.items.map((params) => (
              <MovieCollection key={params.kinopoiskId} {...params} />
            ))}
          </ul>
          <Pagination
            align="center"
            showSizeChanger={false}
            current={page}
            onChange={onChangePage}
            total={selectionMovies?.total}
            pageSize={selectionMovies?.items.length}
          />
        </>
      )}
    </Container>
  );
};

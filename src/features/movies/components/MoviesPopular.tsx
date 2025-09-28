import { Container } from '@/app/layouts';
import { useGetCollectionsMoviesQuery } from '@/shared/api/endpoints';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { MoviesPopularSkeleton } from '../ui';
import { MoviePopular } from './MoviePopular';

export const MoviesPopular = () => {
  const { data, isLoading } = useGetCollectionsMoviesQuery({
    type: 'TOP_POPULAR_MOVIES',
  });

  return (
    <Container>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Популярные фильмы</h2>
        <Link
          to={'/popular'}
          className="flex items-center gap-2 cursor-pointer"
        >
          <div className="font-semibold text-2xl text-white/30">
            Смотреть все
          </div>
          <ArrowRightOutlined className="!text-white/30 !text-xl" />
        </Link>
      </div>
      <ul className="grid gap-8 grid-cols-3">
        {isLoading ? (
          <MoviesPopularSkeleton />
        ) : (
          data?.items
            ?.slice(3, 6)
            .map((film) => <MoviePopular key={film.kinopoiskId} {...film} />)
        )}
      </ul>
    </Container>
  );
};

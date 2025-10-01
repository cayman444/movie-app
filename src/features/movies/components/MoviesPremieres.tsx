import { Container } from '@/app/layouts';
import { useGetPremieresMoviesQuery } from '@/shared/api/endpoints';
import { MOVIES_ROUTES } from '@/shared/constants';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { MoviesPremieresSkeleton } from '../ui';
import { MoviePremiere } from './MoviePremiere';

export const MoviesPremieres = () => {
  const { data: premieresMovies, isLoading } = useGetPremieresMoviesQuery({
    year: 2025,
    month: 'SEPTEMBER',
  });

  return (
    <Container className="flex flex-col gap-6 mb-18">
      <h2 className="text-2xl font-medium">{MOVIES_ROUTES.PREMIERES.title}</h2>
      <div className="flex items-center gap-8">
        <ul className="flex-1 grid gap-8 grid-cols-4">
          {isLoading ? (
            <MoviesPremieresSkeleton />
          ) : (
            premieresMovies?.items
              .slice(14, 18)
              .map((movie) => (
                <MoviePremiere key={movie.kinopoiskId} {...movie} />
              ))
          )}
        </ul>
        <Link
          to={MOVIES_ROUTES.PREMIERES.path}
          className="flex items-center justify-center w-22 h-22 bg-neutral-700 rounded-full cursor-pointer hover:bg-neutral-600 transition-colors"
        >
          <ArrowRightOutlined
            style={{ fontSize: 32 }}
            className="!text-neutral-400"
          />
        </Link>
      </div>
    </Container>
  );
};

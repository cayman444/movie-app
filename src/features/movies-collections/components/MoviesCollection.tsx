import { Container } from '@/app/layouts';
import type { Movie } from '@/entities/movie/types';
import { MovieItem } from '@/features/movies/components';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { MoviesCollectionSkeleton } from '../ui';

interface MoviesCollection {
  title: string;
  link: string;
  movies?: Movie[];
  isLoading: boolean;
}

export const MoviesCollection: FC<MoviesCollection> = ({
  movies,
  isLoading,
  link,
  title,
}) => {
  return (
    <Container className="w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <Link
          to={link}
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="font-semibold text-2xl text-neutral-600 transition-colors group-hover:text-neutral-500">
            Смотреть все
          </div>
          <ArrowRightOutlined className="!text-neutral-600 !text-xl transition-colors group-hover:!text-neutral-500" />
        </Link>
      </div>
      <ul>
        {isLoading ? (
          <MoviesCollectionSkeleton />
        ) : (
          <Carousel
            arrows
            dots={false}
            autoplay={{ dotDuration: true }}
            autoplaySpeed={5000}
            slidesToShow={5}
          >
            {movies?.map((film) => (
              <MovieItem key={film.kinopoiskId} {...film} />
            ))}
          </Carousel>
        )}
      </ul>
    </Container>
  );
};

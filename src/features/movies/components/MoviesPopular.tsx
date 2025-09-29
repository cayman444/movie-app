import { Container } from '@/app/layouts';
import { useGetCollectionsMoviesQuery } from '@/shared/api/endpoints';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
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
          className="group flex items-center gap-2 cursor-pointer"
        >
          <div className="font-semibold text-2xl text-neutral-600 transition-colors group-hover:text-neutral-500">
            Смотреть все
          </div>
          <ArrowRightOutlined className="!text-neutral-600 !text-xl transition-colors group-hover:!text-neutral-500" />
        </Link>
      </div>
      <ul className="overflow-hidden">
        {isLoading ? (
          <MoviesPopularSkeleton />
        ) : (
          <Carousel
            arrows
            dots={false}
            autoplay={{ dotDuration: true }}
            autoplaySpeed={5000}
            slidesToShow={3}
            className="[&_.slick-list]:!-mx-4 [&_.slick-slide]:!px-4  [&_.slick-prev]:-left-6"
          >
            {data?.items?.map((film) => (
              <MoviePopular key={film.kinopoiskId} {...film} />
            ))}
          </Carousel>
        )}
      </ul>
    </Container>
  );
};

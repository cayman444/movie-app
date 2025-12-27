import { Container } from '@/app/layouts';
import { formatMovieTime } from '@/shared/utils';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  PlayCircleOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Button, Tag } from 'antd';
import { useMoviePreview } from '../hooks';
import { MoviePreviewSkeleton } from '../ui';

export const MoviePreview = () => {
  const { movie, contextHolder, navigate, openNotification } =
    useMoviePreview();

  if (!movie) return <MoviePreviewSkeleton />;

  return (
    <div className="relative mb-18 sm:h-screen">
      {contextHolder}
      <span className="absolute inset-0 bg-[url(/preview-movie.jpg)] bg-no-repeat bg-cover bg-fixed bg-center" />
      <Container className="flex flex-col h-full pt-20">
        <div className="flex-1 flex items-end justify-center gap-4 z-1 mb-20 flex-wrap mt-20 md:mt-0 md:gap-8">
          <Button
            color="red"
            variant="solid"
            iconPosition="end"
            className="!p-6 !border-2 !text-xl !font-semibold"
            onClick={() => navigate('/movies/505898')}
            icon={<PlayCircleOutlined style={{ fontSize: 24 }} />}
          >
            Смотреть сейчас
          </Button>
          <Button
            danger
            ghost
            onClick={openNotification}
            iconPosition="end"
            icon={<ClockCircleOutlined style={{ fontSize: 24 }} />}
            className="!p-6 !border-2 !text-xl !font-semibold !text-white"
          >
            Смотреть позже
          </Button>
        </div>
        <div className="flex flex-col gap-6 z-1 justify-end  pb-40 max-w-2xl min-[1400px]:-ml-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold">{movie?.nameRu}</h1>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                {movie?.genres.map(({ genre }) => (
                  <Tag
                    key={genre}
                    color="#FF0000"
                    className="!m-0 !font-semibold"
                  >
                    {genre}
                  </Tag>
                ))}
              </div>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <CalendarOutlined />
                  <div className="font-semibold">{movie?.year}</div>
                </div>
                <div className="flex items-center gap-2">
                  <ClockCircleOutlined />
                  <div className="font-semibold">
                    {formatMovieTime(movie?.filmLength)}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <StarOutlined />
                  <div className="font-semibold">{movie?.ratingKinopoisk}</div>
                </div>
              </div>
            </div>
          </div>
          <p className="font-medium">{movie?.description}</p>
        </div>
      </Container>
    </div>
  );
};

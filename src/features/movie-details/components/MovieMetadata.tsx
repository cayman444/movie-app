import type { MovieGenre } from '@/entities/movie/types';
import { formatMovieTime } from '@/shared/utils';
import {
  CalendarOutlined,
  ClockCircleOutlined,
  StarOutlined,
} from '@ant-design/icons';
import { Tag } from 'antd';
import type { FC } from 'react';

interface MovieMetadataProps {
  genres?: MovieGenre[];
  year?: number;
  filmLength?: number;
  ratingKinopoisk?: number;
}

export const MovieMetadata: FC<MovieMetadataProps> = ({
  genres,
  year,
  filmLength,
  ratingKinopoisk,
}) => {
  return (
    <div className="flex items-center gap-4 font-medium mb-6 flex-wrap">
      <div className="flex items-center gap-2 flex-wrap">
        {genres?.map(({ genre }) => (
          <Tag
            key={genre}
            color="red-inverse"
            className="!m-0 !font-semibold !inline-flex !w-fit"
          >
            {genre}
          </Tag>
        ))}
      </div>
      <div className="flex items-center gap-2">
        <CalendarOutlined />
        <div className="font-semibold">{year}</div>
      </div>
      {filmLength && (
        <div className="flex items-center gap-2">
          <ClockCircleOutlined />
          <div className="font-semibold">{formatMovieTime(filmLength)}</div>
        </div>
      )}
      <div className="flex items-center gap-2">
        <StarOutlined />
        <div className="font-semibold">{ratingKinopoisk}</div>
      </div>
    </div>
  );
};

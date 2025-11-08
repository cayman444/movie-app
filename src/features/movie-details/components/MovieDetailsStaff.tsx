import type { StaffInfoList, StaffProfession } from '@/entities/staff/types';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { useMovieDetailsStaff } from '../hooks';

interface MovieDetailsStaffProps extends ComponentProps<'li'> {
  title: string;
  staff?: StaffInfoList;
  movieId?: number;
  profession: StaffProfession;
}

export const MovieDetailsStaff: FC<MovieDetailsStaffProps> = ({
  title,
  staff,
  movieId,
  profession,
  className,
}) => {
  const { slicedStaff, linkMoreInfoCondition, commaRenderCondition } =
    useMovieDetailsStaff(staff);

  return (
    <li className={clsx('flex gap-2', className)}>
      <h4 className="text-nowrap">{title}</h4>
      <ul className="flex gap-1 overflow-hidden">
        <div className="flex gap-1 overflow-hidden">
          {slicedStaff?.map(({ staffId, nameRu }, ind) => (
            <li key={staffId} className="text-nowrap">
              <a
                href={`https://www.kinopoisk.ru/name/${staffId}`}
                target="_blank"
                rel="noreferrer"
                className="transition-colors hover:text-neutral-400"
              >
                {nameRu}
              </a>
              {commaRenderCondition(ind) && ','}
            </li>
          ))}
        </div>
        {linkMoreInfoCondition && (
          <a
            href={`https://www.kinopoisk.ru/film/${movieId}/cast/who_is/${profession.toLowerCase()}`}
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-neutral-400"
          >
            ...
          </a>
        )}
      </ul>
    </li>
  );
};

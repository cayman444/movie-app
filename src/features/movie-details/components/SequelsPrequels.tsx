import type { SequelsPrequelsList } from '@/entities/movie/types';
import type { FC } from 'react';
import { SequelsPrequelItem } from './sequelsPrequelItem';

interface SequelsPrequelsParams {
  sequelsPrequels: SequelsPrequelsList;
}

export const SequelsPrequels: FC<SequelsPrequelsParams> = ({
  sequelsPrequels,
}) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="font-bold text-2xl">Сиквелы и приквелы</h2>
      <ul className="grid grid-cols-6 gap-4">
        {sequelsPrequels?.map((data) => (
          <SequelsPrequelItem key={data.filmId} {...data} />
        ))}
      </ul>
    </div>
  );
};

import type { SequelsPrequelsList } from '@/entities/movie/types';
import { type FC } from 'react';
import { useVisibleItems } from '../hooks';
import { VisibleItemsButton } from '../ui';
import { SequelsPrequelItem } from './sequelsPrequelItem';

interface SequelsPrequelsParams {
  sequelsPrequels: SequelsPrequelsList;
}

export const SequelsPrequels: FC<SequelsPrequelsParams> = ({
  sequelsPrequels,
}) => {
  const { isVisibleAll, visibleItems, hiddenCount, handleChangeVisible } =
    useVisibleItems(sequelsPrequels);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl">Сиквелы и приквелы</h2>
        {hiddenCount > 0 && (
          <VisibleItemsButton
            hiddenCount={hiddenCount}
            isVisibleAll={isVisibleAll}
            handleChangeVisible={handleChangeVisible}
          />
        )}
      </div>
      <ul className="grid grid-cols-6 gap-4">
        {visibleItems.map((data) => (
          <SequelsPrequelItem key={data.filmId} {...data} />
        ))}
      </ul>
    </div>
  );
};

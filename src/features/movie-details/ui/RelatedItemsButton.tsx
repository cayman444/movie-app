import type { FC } from 'react';

interface RelatedItemsButtonProps {
  handleChangeVisible: () => void;
  isVisibleAll: boolean;
  hiddenCount: number;
}

export const RelatedItemsButton: FC<RelatedItemsButtonProps> = ({
  hiddenCount,
  isVisibleAll,
  handleChangeVisible,
}) => {
  return (
    <button
      onClick={handleChangeVisible}
      className="flex items-center justify-center bg-neutral-700 rounded-full cursor-pointer w-10 h-10 transition-colors hover:bg-neutral-600"
      title={isVisibleAll ? 'Свернуть' : `Показать все (${hiddenCount})`}
    >
      {isVisibleAll ? '-' : `+${hiddenCount}`}
    </button>
  );
};

import { useState } from 'react';

export const useRelatedItems = <T>(items: T[]) => {
  const [isVisibleAll, setIsVisibleAll] = useState(false);

  const visibleItems = isVisibleAll ? items : items.slice(0, 6);
  const hiddenCount = items.length - 6;

  const handleChangeVisible = () => {
    setIsVisibleAll((prev) => !prev);
  };

  return { isVisibleAll, visibleItems, hiddenCount, handleChangeVisible };
};

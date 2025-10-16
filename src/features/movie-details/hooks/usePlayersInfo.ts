import { useGetPlayerQuery } from '@/shared/api/endpoints';
import { useState } from 'react';

export const usePlayersInfo = (movieId: string) => {
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);

  const { currentData: playersInfo, isFetching: playersInfoLoading } =
    useGetPlayerQuery({ id: movieId }, { skip: !movieId });

  const onChangeSelectedPlayerIndex = (value: string) => {
    setSelectedPlayerIndex(+value);
  };

  return {
    selectedPlayerIndex,
    playersInfo,
    playersInfoLoading,
    onChangeSelectedPlayerIndex,
  };
};

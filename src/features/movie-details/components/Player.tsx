import type { PlayersInfo } from '@/entities/player/types';
import type { FC } from 'react';
import { PlayerSkeleton } from '../ui';

interface PlayerProps {
  playersInfo?: PlayersInfo;
  selectedPlayerIndex: number;
}

export const Player: FC<PlayerProps> = ({
  playersInfo,
  selectedPlayerIndex,
}) => {
  return (
    <div className="relative pt-[50%] mb-6">
      {playersInfo ? (
        <iframe
          src={playersInfo?.[selectedPlayerIndex].iframe}
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <PlayerSkeleton />
      )}
    </div>
  );
};

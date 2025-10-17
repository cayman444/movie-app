import type { PlayersInfo } from '@/entities/player/types';
import { memo } from 'react';
import { PlayerSkeleton } from '../ui';

interface PlayerProps {
  playersInfo?: PlayersInfo;
  selectedPlayerIndex: number;
  isLoading: boolean;
}

export const Player = memo(function Player({
  playersInfo,
  isLoading,
  selectedPlayerIndex,
}: PlayerProps) {
  return (
    <div className="relative pt-[50%] mb-6">
      {isLoading ? (
        <PlayerSkeleton />
      ) : (
        <iframe
          src={playersInfo?.[selectedPlayerIndex].iframe}
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      )}
    </div>
  );
});

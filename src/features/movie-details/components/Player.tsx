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
    <div className="relative pt-[420px] mb-6 md:pt-[50%]">
      {isLoading ? (
        <PlayerSkeleton />
      ) : (
        <iframe
          src={playersInfo?.[selectedPlayerIndex].iframe}
          allowFullScreen
          className="absolute inset-0 w-full h-full rounded-lg"
        />
      )}
    </div>
  );
});

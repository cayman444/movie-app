import type { PlayersInfo } from '@/entities/player/types';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { type FC } from 'react';
import { PlayersInfoSkeleton } from '../ui';

interface PlayersInfoProps {
  playersInfo?: PlayersInfo;
  playersInfoLoading: boolean;
  selectedPlayerIndex: number;
  onChange: (value: string) => void;
}

export const PlayersInfoSelect: FC<PlayersInfoProps> = ({
  playersInfo,
  playersInfoLoading,
  selectedPlayerIndex,
  onChange,
}) => {
  return (
    <div className="flex items-center gap-2 mb-4 max-w-3xl mx-auto">
      <h2 className="font-medium">Плеер:</h2>
      {playersInfo ? (
        <Select
          suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
          defaultValue={playersInfo[selectedPlayerIndex].translate}
          style={{ width: '100%' }}
          loading={playersInfoLoading}
          onChange={onChange}
          options={playersInfo.map(({ translate }, ind) => ({
            label: translate,
            value: ind,
          }))}
        />
      ) : (
        <PlayersInfoSkeleton />
      )}
    </div>
  );
};

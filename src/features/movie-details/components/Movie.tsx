import { Container } from '@/app/layouts';
import { useGetPlayerQuery } from '@/shared/api/endpoints';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { DownOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PlayerSkeleton, PlayersInfoSkeleton } from '../ui';

export const Movie = () => {
  const { id } = useParams();
  const movieId = id || '';
  const [selectedPlayerIndex, setSelectedPlayerIndex] = useState(0);
  const { data: playersInfo, isFetching } = useGetPlayerQuery(
    { id: movieId },
    { skip: !movieId }
  );

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <div className="flex items-center gap-2 mb-4 max-w-3xl mx-auto">
        <h2 className="font-medium">Плеер:</h2>
        {playersInfo ? (
          <Select
            suffixIcon={<DownOutlined style={{ color: '#ffffff73' }} />}
            defaultValue={playersInfo[selectedPlayerIndex].translate}
            style={{ width: '100%' }}
            loading={isFetching}
            onChange={(value) => setSelectedPlayerIndex(+value)}
            options={playersInfo.map(({ translate }, ind) => ({
              label: translate,
              value: ind,
            }))}
          />
        ) : (
          <PlayersInfoSkeleton />
        )}
      </div>
      <div className="relative pt-[50%]">
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
    </Container>
  );
};

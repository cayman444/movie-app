import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { PlayerSkeleton } from '../ui';
import { PlayersInfoSelect } from './PlayersInfoSelect';

export const Movie = () => {
  const {
    playersInfo,
    playersInfoLoading,
    selectedPlayerIndex,
    onChangeSelectedPlayerIndex,
  } = useMovieDetails();

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <PlayersInfoSelect
        playersInfo={playersInfo}
        playersInfoLoading={playersInfoLoading}
        selectedPlayerIndex={selectedPlayerIndex}
        onChange={onChangeSelectedPlayerIndex}
      />
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

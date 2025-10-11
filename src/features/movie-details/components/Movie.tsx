import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { PlayerSkeleton } from '../ui';
import { MovieLogo } from './MovieLogo';
import { PlayersInfoSelect } from './PlayersInfoSelect';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    playersInfoLoading,
    selectedPlayerIndex,
    onChangeSelectedPlayerIndex,
  } = useMovieDetails();

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <MovieLogo logoUrl={movieInfo?.logoUrl} nameRu={movieInfo?.nameRu} />
      <PlayersInfoSelect
        playersInfo={playersInfo}
        playersInfoLoading={playersInfoLoading}
        selectedPlayerIndex={selectedPlayerIndex}
        onChange={onChangeSelectedPlayerIndex}
      />
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
      <div className="grid grid-cols-[20%_1fr] gap-8">
        <div className="relative pt-[150%]">
          <img
            src={movieInfo?.posterUrl}
            alt=""
            className="absolute inset-0 w-full h-full rounded-lg"
          />
        </div>
        <div>2</div>
      </div>
    </Container>
  );
};

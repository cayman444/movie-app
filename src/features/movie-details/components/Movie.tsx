import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { MovieInfo } from './MovieInfo';
import { MovieLogo } from './MovieLogo';
import { Player } from './Player';
import { PlayersInfoSelect } from './PlayersInfoSelect';
import { SequelsPrequels } from './SequelsPrequels';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    sequelsPrequels,
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
      <Player
        playersInfo={playersInfo}
        selectedPlayerIndex={selectedPlayerIndex}
      />
      <MovieInfo movieInfo={movieInfo} className="mb-8" />
      {sequelsPrequels && <SequelsPrequels sequelsPrequels={sequelsPrequels} />}
    </Container>
  );
};

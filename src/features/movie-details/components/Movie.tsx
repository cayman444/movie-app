import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { MovieInfo } from './MovieInfo';
import { MovieLogo } from './MovieLogo';
import { Player } from './Player';
import { PlayersInfoSelect } from './PlayersInfoSelect';
import { SequelsPrequels } from './SequelsPrequels';
import { SimilarMovies } from './SimilarMovies';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    sequelsPrequels,
    similarMovies,
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
      <MovieInfo movieInfo={movieInfo} className="mb-10" />
      {sequelsPrequels && (
        <SequelsPrequels sequelsPrequels={sequelsPrequels} className="mb-10" />
      )}
      {(similarMovies?.total ?? 0) > 0 && similarMovies && (
        <SimilarMovies similarMovies={similarMovies.items} />
      )}
    </Container>
  );
};

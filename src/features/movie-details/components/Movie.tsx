import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { MovieInfo } from './MovieInfo';
import { MovieLogo } from './MovieLogo';
import { Player } from './Player';
import { PlayersInfoSelect } from './PlayersInfoSelect';
import { VisibleMovies } from './VisibleMovies';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    sequelsPrequels,
    similarMovies,
    playersInfoLoading,
    selectedPlayerIndex,
    refSequelsPrequels,
    refSimilarMovies,
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
      <div ref={refSequelsPrequels}>
        {sequelsPrequels && (
          <VisibleMovies
            movies={sequelsPrequels}
            title="Сиквелы и приквелы"
            className="mb-10"
          />
        )}
      </div>
      <div ref={refSimilarMovies}>
        {similarMovies && (
          <VisibleMovies movies={similarMovies.items} title="Похожие" />
        )}
      </div>
    </Container>
  );
};

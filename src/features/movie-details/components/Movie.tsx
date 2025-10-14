import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { VisibleMoviesSkeleton } from '../ui';
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
    sequelsPrequelsLoading,
    similarMoviesLoading,
    refSequelsPrequels,
    refSimilarMovies,
    onChangeSelectedPlayerIndex,
  } = useMovieDetails();

  return (
    <Container>
      <BreadcrumbPaths
        movieName={movieInfo?.nameRu || movieInfo?.nameEn}
        className="!mb-8"
      />
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
      <MovieInfo movieInfo={movieInfo} />
      <div ref={refSequelsPrequels}>
        {sequelsPrequelsLoading ? (
          <VisibleMoviesSkeleton className="mt-10 mb-10" />
        ) : (
          sequelsPrequels && (
            <VisibleMovies
              movies={sequelsPrequels}
              title="Сиквелы и приквелы"
              className="mt-10 mb-10"
            />
          )
        )}
      </div>
      <div ref={refSimilarMovies}>
        {similarMoviesLoading ? (
          <VisibleMoviesSkeleton className="mt-10" />
        ) : (
          similarMovies && (
            <VisibleMovies
              movies={similarMovies.items}
              title="Похожие"
              className="mt-10"
            />
          )
        )}
      </div>
    </Container>
  );
};

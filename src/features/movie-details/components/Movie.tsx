import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useMovieDetails } from '../hooks';
import { MovieInfo } from './MovieInfo';
import { MovieLogo } from './MovieLogo';
import { Player } from './Player';
import { PlayersInfoSelect } from './PlayersInfoSelect';
import { RelatedMovies } from './RelatedMovies';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    sequelsPrequels,
    similarMovies,
    actorsInfo,
    directorsInfo,
    playersInfoLoading,
    selectedPlayerIndex,
    sequelsPrequelsLoading,
    similarMoviesLoading,
    movieInfoLoading,
    staffInfoLoading,
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
      <MovieLogo
        isLoading={movieInfoLoading}
        logoUrl={movieInfo?.logoUrl}
        nameRu={movieInfo?.nameRu}
      />
      <PlayersInfoSelect
        playersInfo={playersInfo}
        playersInfoLoading={playersInfoLoading}
        selectedPlayerIndex={selectedPlayerIndex}
        onChange={onChangeSelectedPlayerIndex}
      />
      <Player
        playersInfo={playersInfo}
        isLoading={playersInfoLoading}
        selectedPlayerIndex={selectedPlayerIndex}
      />
      <MovieInfo
        movieInfo={movieInfo}
        actorsInfo={actorsInfo}
        directorsInfo={directorsInfo}
        movieInfoLoading={movieInfoLoading}
        staffInfoLoading={staffInfoLoading}
      />
      <RelatedMovies
        movies={sequelsPrequels}
        title="Сиквелы и приквелы"
        isLoading={sequelsPrequelsLoading}
        ref={refSequelsPrequels}
        className="mt-10 mb-10"
      />
      <RelatedMovies
        movies={similarMovies?.items}
        title="Похожие"
        isLoading={similarMoviesLoading}
        ref={refSimilarMovies}
        className="mt-10"
      />
    </Container>
  );
};

import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { Tooltip, notification } from 'antd';
import { useMovieDetails } from '../hooks';
import { PlayerSkeleton } from '../ui';
import { PlayersInfoSelect } from './PlayersInfoSelect';

export const Movie = () => {
  const {
    playersInfo,
    movieInfo,
    playersInfoLoading,
    selectedPlayerIndex,
    onChangeSelectedPlayerIndex,
  } = useMovieDetails();

  const [api, contextHolder] = notification.useNotification({
    maxCount: 1,
    duration: 1,
    placement: 'bottom',
    pauseOnHover: false,
  });

  const openNotification = () => {
    api.open({
      message: 'Скопировано',
      type: 'info',
      style: { width: 300 },
    });
  };

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <div className="flex justify-center mb-10">
        {contextHolder}
        <Tooltip title="Скопировать" zIndex={1}>
          {movieInfo?.logoUrl ? (
            <img
              onClick={openNotification}
              src={movieInfo?.logoUrl}
              alt="logo movie"
              className="h-20 object-cover cursor-pointer transition-all 
             drop-shadow-[0_0_15px_rgba(100,100,100,0.3)]
             hover:drop-shadow-[0_0_20px_rgba(163,163,163,0.6)]"
            />
          ) : (
            <h1
              onClick={openNotification}
              className="font-bold text-5xl cursor-pointer transition-all drop-shadow-[0_0_15px_rgba(100,100,100,0.3)]
             hover:drop-shadow-[0_0_20px_rgba(163,163,163,0.6)]"
            >
              {movieInfo?.nameRu}
            </h1>
          )}
        </Tooltip>
      </div>
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

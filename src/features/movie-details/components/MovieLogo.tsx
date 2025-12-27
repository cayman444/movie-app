import { Skeleton, Tooltip, notification } from 'antd';
import { memo } from 'react';
import { copyText } from '../utils';

interface MovieLogoProps {
  logoUrl?: string;
  nameRu?: string;
  isLoading: boolean;
}

export const MovieLogo = memo(function MovieLogo({
  logoUrl,
  nameRu,
  isLoading,
}: MovieLogoProps) {
  const [api, contextHolder] = notification.useNotification({
    maxCount: 1,
    duration: 1,
    placement: 'bottom',
    pauseOnHover: false,
  });

  const openNotification = () => {
    copyText(nameRu);

    api.open({
      message: 'Скопировано',
      type: 'info',
      style: { width: 300 },
    });
  };

  return (
    <div className="flex justify-center mb-10">
      {isLoading ? (
        <Skeleton.Node active className="!h-10 !w-80 !rounded-lg" />
      ) : (
        <>
          {contextHolder}
          <Tooltip title="Скопировать" zIndex={1}>
            {logoUrl ? (
              <img
                onClick={openNotification}
                src={logoUrl}
                alt="logo movie"
                className="h-20 object-contain cursor-pointer transition-all 
                 drop-shadow-[0_0_15px_rgba(100,100,100,0.3)]
                 hover:drop-shadow-[0_0_20px_rgba(163,163,163,0.6)]"
              />
            ) : (
              <h1
                onClick={openNotification}
                className="font-bold text-5xl text-nowrap overflow-ellipsis overflow-hidden cursor-pointer transition-all drop-shadow-[0_0_15px_rgba(100,100,100,0.3)]
                 hover:drop-shadow-[0_0_20px_rgba(163,163,163,0.6)]"
              >
                {nameRu}
              </h1>
            )}
          </Tooltip>
        </>
      )}
    </div>
  );
});

import { Skeleton } from 'antd';
import clsx from 'clsx';
import { type ComponentProps, type FC, useState } from 'react';

export const LazyMovieImg: FC<ComponentProps<'img'>> = ({
  src,
  alt,
  className,
}) => {
  const [isImgLoading, setIsImgLoading] = useState(true);

  return (
    <>
      {isImgLoading && (
        <Skeleton.Node
          active
          className="!absolute !inset-0 !w-full !h-full !rounded-lg"
        />
      )}
      <img
        loading="lazy"
        onLoad={() => setIsImgLoading(false)}
        src={src}
        alt={alt}
        className={clsx(
          'absolute inset-0 w-full h-full object-cover rounded-lg',
          className,
          isImgLoading && 'opacity-0'
        )}
      />
    </>
  );
};

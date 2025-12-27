import { Skeleton } from 'antd';
import { useSlidesToShow } from '../hooks';

export const MoviesCollectionSkeleton = () => {
  const slidesToShow = useSlidesToShow();

  return (
    <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {Array.from({ length: slidesToShow }).map((_, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className="relative pt-[520px] sm:pt-[150%] w-full mb-6">
            <Skeleton.Node
              active
              className="!absolute !inset-0 !w-full !h-full !rounded-lg"
            />
          </div>
          <Skeleton active paragraph={{ rows: 2 }} title={false} />
        </div>
      ))}
    </div>
  );
};

import { Skeleton } from 'antd';

export const MoviesPremieresSkeleton = () => {
  return Array.from({ length: 4 }).map((_, index) => (
    <div key={index} className="flex gap-4 items-center">
      <div className="relative w-30 h-40">
        <Skeleton.Node active className="!absolute !inset-0 !w-full !h-full" />
      </div>
      <Skeleton active paragraph={{ rows: 2 }} className="flex-1" />
    </div>
  ));
};

import { Skeleton } from 'antd';

export const MoviesPopularSkeleton = () => {
  return Array.from({ length: 3 }).map((_, index) => (
    <div key={index} className="flex flex-col gap-4">
      <div className="relative pt-[150%] w-full">
        <Skeleton.Node active className="!absolute !inset-0 !w-full !h-full" />
      </div>
      <Skeleton active paragraph={{ rows: 1 }} />
    </div>
  ));
};

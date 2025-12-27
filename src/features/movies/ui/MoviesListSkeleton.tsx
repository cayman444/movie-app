import { Skeleton } from 'antd';
import type { FC } from 'react';

interface MoviesListSkeletonProps {
  hasPagination?: boolean;
}

export const MoviesListSkeleton: FC<MoviesListSkeletonProps> = ({
  hasPagination = true,
}) => {
  return (
    <>
      <div className="grid gap-x-4 gap-y-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {Array.from({ length: 15 }).map((_, index) => (
          <div key={index} className="flex flex-col w-full">
            <div className="relative pt-[420px] sm:pt-[150%] w-full mb-6">
              <Skeleton.Node
                active
                className="!absolute !inset-0 !w-full !h-full !rounded-lg"
              />
            </div>
            <Skeleton active paragraph={{ rows: 2 }} title={false} />
          </div>
        ))}
      </div>
      {hasPagination && (
        <div className="flex justify-center">
          <Skeleton.Node active className="!w-xs !h-10" />
        </div>
      )}
    </>
  );
};

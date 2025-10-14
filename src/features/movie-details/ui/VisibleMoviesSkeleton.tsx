import { Skeleton } from 'antd';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

export const VisibleMoviesSkeleton: FC<ComponentProps<'div'>> = ({
  className,
}) => {
  return (
    <div className={clsx('flex flex-col gap-6', className)}>
      <Skeleton.Node active className="!h-10 !w-40" />
      <div className="grid grid-cols-6 gap-4">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="flex flex-col gap-4 h-full">
            <div className="relative pt-[150%]">
              <Skeleton.Node
                active
                className="!absolute !inset-0 !w-full !h-full !rounded-lg"
              />
            </div>
            <Skeleton active paragraph={{ rows: 2 }} title={false} />
          </div>
        ))}
      </div>
    </div>
  );
};

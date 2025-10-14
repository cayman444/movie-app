import { Skeleton } from 'antd';

export const MovieInfoSkeleton = () => {
  return (
    <div className="grid grid-cols-[20%_1fr] gap-8">
      <div className="relative pt-[150%] self-start">
        <Skeleton.Node
          active
          className="!absolute !inset-0 !w-full !h-full !rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-10">
        <Skeleton active paragraph={{ rows: 5 }} />
        <Skeleton active paragraph={{ rows: 4 }} className="max-w-sm" />
      </div>
    </div>
  );
};

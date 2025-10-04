import { Skeleton } from 'antd';

export const MoviesSkeleton = () => {
  return (
    <div className="grid grid-cols-5 gap-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex flex-col w-full">
          <div className="relative pt-[150%] w-full mb-6">
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

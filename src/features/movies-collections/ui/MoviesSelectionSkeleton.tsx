import { Skeleton } from 'antd';

export const MoviesSelectionSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-5 gap-x-4 gap-y-8 mb-12">
        {Array.from({ length: 15 }).map((_, index) => (
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
      <div className="flex justify-center">
        <Skeleton.Node active className="!w-md !h-10" />
      </div>
    </>
  );
};

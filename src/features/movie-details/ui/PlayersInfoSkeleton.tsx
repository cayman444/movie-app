import { Skeleton } from 'antd';

export const PlayersInfoSkeleton = () => {
  return (
    <div className="relative h-10 w-full">
      <Skeleton.Node
        active
        className="!absolute !inset-0 !w-full !h-full !rounded-lg"
      />
    </div>
  );
};

import { Skeleton } from 'antd';

export const PlayerSkeleton = () => {
  return (
    <Skeleton.Node active className="!absolute !inset-0 !w-full !h-full" />
  );
};

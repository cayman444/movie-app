import { Skeleton, Spin } from 'antd';

export const PlayerSkeleton = () => {
  return (
    <>
      <Spin
        size="large"
        className="!absolute z-1 top-1/2 left-1/2 -translate-1/2"
      />
      <Skeleton.Node
        active
        className="!absolute !inset-0 !w-full !h-full !rounded-lg"
      />
    </>
  );
};

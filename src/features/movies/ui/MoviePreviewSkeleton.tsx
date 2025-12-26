import { Container } from '@/app/layouts';
import { Skeleton } from 'antd';

export const MoviePreviewSkeleton = () => {
  return (
    <div className="relative h-screen mb-18">
      <Container className="flex flex-col h-full">
        <div className="flex-1 flex items-end justify-center gap-4 z-1 mb-20 flex-wrap mt-20 md:mt-0 md:gap-8">
          <Skeleton.Button active className="!w-63 !h-13 !rounded-lg" />
          <Skeleton.Button active className="!w-63 !h-13 !rounded-lg" />
        </div>
        <div className="flex flex-col gap-6 z-1 justify-end  pb-40 max-w-2xl min-[1400px]:-ml-20">
          <Skeleton active paragraph={{ rows: 6 }} />
        </div>
      </Container>
    </div>
  );
};

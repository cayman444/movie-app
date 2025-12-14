import { Spin } from 'antd';
import { type PropsWithChildren, Suspense } from 'react';

export const SuspenseLoader = ({ children }: PropsWithChildren) => {
  return (
    <Suspense fallback={<Spin fullscreen tip="Загрузка..." />}>
      {children}
    </Suspense>
  );
};

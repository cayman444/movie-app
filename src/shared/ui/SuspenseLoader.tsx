import { ConfigProvider, Spin } from 'antd';
import { type PropsWithChildren, Suspense } from 'react';

export const SuspenseLoader = ({ children }: PropsWithChildren) => {
  return (
    <Suspense
      fallback={
        <ConfigProvider
          theme={{
            token: {
              colorBgMask: '#ffffff',
              colorTextLightSolid: '#1677ff',
              colorWhite: '#1677ff',
            },
          }}
        >
          <Spin fullscreen tip="Loading..." />
        </ConfigProvider>
      }
    >
      {children}
    </Suspense>
  );
};

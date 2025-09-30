import { ConfigProvider, type ThemeConfig } from 'antd';
import { type PropsWithChildren } from 'react';

const themeConfig: ThemeConfig = {
  token: {
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    Spin: {
      colorBgMask: '#ffffff',
      colorTextLightSolid: '#1677ff',
      colorWhite: '#1677ff',
    },
    Input: {
      hoverBorderColor: 'transparent',
      activeBorderColor: 'oklch(37.1% 0 0)',
      activeShadow: 'transparent',
      colorTextPlaceholder: 'oklch(70.8% 0 0)',
      controlOutlineWidth: 10,
      borderRadius: 24,
      paddingBlock: 8,
      paddingInline: 18,
    },
    Skeleton: {
      gradientFromColor: 'oklch(43.9% 0 0)',
      gradientToColor: 'oklch(55.6% 0 0)',
    },
  },
};

export const AntdProvider = ({ children }: PropsWithChildren) => {
  return <ConfigProvider theme={themeConfig}>{children}</ConfigProvider>;
};

import type { PropsWithChildren } from 'react';

export const Container = ({ children }: PropsWithChildren) => {
  return <div className="max-w-[1152px] px-4 mx-auto">{children}</div>;
};

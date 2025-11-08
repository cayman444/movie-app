import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface MovieDetailsItemProps extends ComponentProps<'li'> {
  title: string;
}

export const MovieDetailsItem: FC<MovieDetailsItemProps> = ({
  title,
  className,
  children,
}) => {
  return (
    <li className={clsx('flex gap-2 ', className)}>
      <h4 className="font-bold">{title}</h4>
      <div className="line-clamp-1">{children}</div>
    </li>
  );
};

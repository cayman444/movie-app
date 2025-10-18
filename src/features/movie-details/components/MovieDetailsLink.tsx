import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';

interface MovieDetailsLinkProps extends ComponentProps<'li'> {
  title: string;
  href: string;
}

export const MovieDetailsLink: FC<MovieDetailsLinkProps> = ({
  title,
  href,
  className,
  children,
}) => {
  return (
    <li className={clsx('flex gap-2', className)}>
      <h4>{title}</h4>
      <a target="_blank" href={href} rel="noreferrer">
        {children}
      </a>
    </li>
  );
};

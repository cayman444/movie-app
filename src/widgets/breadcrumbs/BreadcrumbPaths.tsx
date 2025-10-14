import { MOVIES_ROUTES } from '@/shared/constants';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import clsx from 'clsx';
import type { ComponentProps, FC } from 'react';
import { Link, useLocation, useMatch } from 'react-router-dom';

interface BreadcrumbPathsProps extends ComponentProps<'nav'> {
  movieName?: string;
}

export const BreadcrumbPaths: FC<BreadcrumbPathsProps> = ({
  movieName,
  className,
}) => {
  const location = useLocation();
  const matchMovieDetails = useMatch(MOVIES_ROUTES.DETAILS_MOVIE.path);
  const { pathname, state } = location;

  const breadcrumbItems: { path: string; title: string }[] = Object.values(
    MOVIES_ROUTES
  ).filter(({ path }) => {
    if (path === '/') return false;

    if (state && typeof state === 'string') {
      return state === path;
    }

    return pathname === path;
  });

  if (matchMovieDetails && movieName) {
    breadcrumbItems.push({
      path: matchMovieDetails.pattern.path,
      title: movieName,
    });
  }

  const itemRender = (route: ItemType, _: object, routes: ItemType[]) => {
    const isLast = route.href === routes.at(-1)?.href;

    return isLast ? (
      <span>{route.title}</span>
    ) : (
      <Link to={`${route.href}`}>{route.title}</Link>
    );
  };

  return (
    <Breadcrumb
      className={clsx(className)}
      itemRender={itemRender}
      items={[
        {
          href: MOVIES_ROUTES.HOME.path,
          title: (
            <>
              <HomeOutlined /> <span>Главная</span>
            </>
          ),
        },
        ...breadcrumbItems.map(({ path, title }) => ({ href: path, title })),
      ]}
    />
  );
};

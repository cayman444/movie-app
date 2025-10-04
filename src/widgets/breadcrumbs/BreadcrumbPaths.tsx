import { MOVIES_ROUTES } from '@/shared/constants';
import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';
import type { ItemType } from 'antd/es/breadcrumb/Breadcrumb';
import type { ComponentProps, FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BreadcrumbPaths: FC<ComponentProps<'nav'>> = (props) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(Boolean);

  const breadcrumbItems = Object.values(MOVIES_ROUTES).filter(({ path }) =>
    pathnames.includes(path.slice(1))
  );

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
      {...props}
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

import { MOVIES_ROUTES } from '@/shared/constants';
import {
  AlertOutlined,
  BookOutlined,
  CrownOutlined,
  FireOutlined,
  HeartOutlined,
  HomeOutlined,
  LikeOutlined,
  RobotOutlined,
  StarOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Link } from 'react-router-dom';

export const HEADER_MENU: MenuProps['items'] = [
  {
    key: '1',
    label: <Link to={MOVIES_ROUTES.HOME.path}>{MOVIES_ROUTES.HOME.title}</Link>,
    icon: <HomeOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '2',
    label: (
      <Link to={MOVIES_ROUTES.POPULAR.path}>{MOVIES_ROUTES.POPULAR.title}</Link>
    ),
    icon: <StarOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '3',
    label: <Link to={MOVIES_ROUTES.BEST.path}>{MOVIES_ROUTES.BEST.title}</Link>,
    icon: <CrownOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '4',
    label: (
      <Link to={MOVIES_ROUTES.POPULAR_SERIALS.path}>
        {MOVIES_ROUTES.POPULAR_SERIALS.title}
      </Link>
    ),
    icon: <LikeOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '5',
    label: (
      <Link to={MOVIES_ROUTES.PREMIERES.path}>
        {MOVIES_ROUTES.PREMIERES.title}
      </Link>
    ),
    icon: <FireOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '6',
    label: (
      <Link to={MOVIES_ROUTES.FAMILY_MOVIES.path}>
        {MOVIES_ROUTES.FAMILY_MOVIES.title}
      </Link>
    ),
    icon: <TeamOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '7',
    label: (
      <Link to={MOVIES_ROUTES.ROMANTIC_MOVIES.path}>
        {MOVIES_ROUTES.ROMANTIC_MOVIES.title}
      </Link>
    ),
    icon: <HeartOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '8',
    label: (
      <Link to={MOVIES_ROUTES.ZOMBIE_MOVIES.path}>
        {MOVIES_ROUTES.ZOMBIE_MOVIES.title}
      </Link>
    ),
    icon: <RobotOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '9',
    label: (
      <Link to={MOVIES_ROUTES.CATASTROPHE_MOVIES.path}>
        {MOVIES_ROUTES.CATASTROPHE_MOVIES.title}
      </Link>
    ),
    icon: <AlertOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '10',
    label: (
      <Link to={MOVIES_ROUTES.COMICS_MOVIES.path}>
        {MOVIES_ROUTES.COMICS_MOVIES.title}
      </Link>
    ),
    icon: <BookOutlined style={{ fontSize: 16 }} />,
  },
  { type: 'divider' },
  {
    key: '11',
    label: (
      <Link to={MOVIES_ROUTES.MOVIES.path}>{MOVIES_ROUTES.MOVIES.title}</Link>
    ),
  },
  {
    key: '12',
    label: (
      <Link to={MOVIES_ROUTES.SERIALS.path}>{MOVIES_ROUTES.SERIALS.title}</Link>
    ),
  },
  {
    key: '13',
    label: (
      <Link to={MOVIES_ROUTES.ANIMATIONS.path}>
        {MOVIES_ROUTES.ANIMATIONS.title}
      </Link>
    ),
  },
];

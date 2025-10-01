import { MOVIES_PATHS } from '@/shared/constants';
import {
  AlertOutlined,
  BookOutlined,
  CrownOutlined,
  FireOutlined,
  HeartOutlined,
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
    label: (
      <Link to={MOVIES_PATHS.POPULAR.path}>{MOVIES_PATHS.POPULAR.title}</Link>
    ),
    icon: <StarOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '2',
    label: <Link to={MOVIES_PATHS.BEST.path}>{MOVIES_PATHS.BEST.title}</Link>,
    icon: <CrownOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '3',
    label: (
      <Link to={MOVIES_PATHS.POPULAR_SERIALS.path}>
        {MOVIES_PATHS.POPULAR_SERIALS.title}
      </Link>
    ),
    icon: <LikeOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '4',
    label: (
      <Link to={MOVIES_PATHS.PREMIERES.path}>
        {MOVIES_PATHS.PREMIERES.title}
      </Link>
    ),
    icon: <FireOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '5',
    label: (
      <Link to={MOVIES_PATHS.FAMILY_MOVIES.path}>
        {MOVIES_PATHS.FAMILY_MOVIES.title}
      </Link>
    ),
    icon: <TeamOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '6',
    label: (
      <Link to={MOVIES_PATHS.ROMANTIC_MOVIES.path}>
        {MOVIES_PATHS.ROMANTIC_MOVIES.title}
      </Link>
    ),
    icon: <HeartOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '7',
    label: (
      <Link to={MOVIES_PATHS.ZOMBIE_MOVIES.path}>
        {MOVIES_PATHS.ZOMBIE_MOVIES.title}
      </Link>
    ),
    icon: <RobotOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '8',
    label: (
      <Link to={MOVIES_PATHS.CATASTROPHE_MOVIES.path}>
        {MOVIES_PATHS.CATASTROPHE_MOVIES.title}
      </Link>
    ),
    icon: <AlertOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '9',
    label: (
      <Link to={MOVIES_PATHS.COMICS_MOVIES.path}>
        {MOVIES_PATHS.COMICS_MOVIES.title}
      </Link>
    ),
    icon: <BookOutlined style={{ fontSize: 16 }} />,
  },
  { type: 'divider' },
  {
    key: '10',
    label: (
      <Link to={MOVIES_PATHS.MOVIES.path}>{MOVIES_PATHS.MOVIES.title}</Link>
    ),
  },
  {
    key: '11',
    label: (
      <Link to={MOVIES_PATHS.SERIALS.path}>{MOVIES_PATHS.SERIALS.title}</Link>
    ),
  },
  {
    key: '12',
    label: (
      <Link to={MOVIES_PATHS.ANIMATIONS.path}>
        {MOVIES_PATHS.ANIMATIONS.title}
      </Link>
    ),
  },
];

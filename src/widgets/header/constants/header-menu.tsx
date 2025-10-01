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
    label: <Link to={'/popular'}>ТОП 100 популярных фильмов</Link>,
    icon: <StarOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '2',
    label: <Link to={'/best'}>ТОП 250 лучших фильмов</Link>,
    icon: <CrownOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '3',
    label: <Link to={'/popular-serials'}>Популярные сериалы</Link>,
    icon: <LikeOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '4',
    label: <Link to={'/premieres'}>Кинопремьеры</Link>,
    icon: <FireOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '5',
    label: <Link to={'/family'}>Семейные</Link>,
    icon: <TeamOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '6',
    label: <Link to={'/romantic'}>Романтика</Link>,
    icon: <HeartOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '7',
    label: <Link to={'/zombie'}>Зомби</Link>,
    icon: <RobotOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '8',
    label: <Link to={'/zombie'}>Катастрофы</Link>,
    icon: <AlertOutlined style={{ fontSize: 16 }} />,
  },
  {
    key: '9',
    label: <Link to={'/comics'}>Комиксы</Link>,
    icon: <BookOutlined style={{ fontSize: 16 }} />,
  },
  { type: 'divider' },
  {
    key: '10',
    label: <Link to={'/movies'}>Фильмы</Link>,
  },
  {
    key: '11',
    label: <Link to={'/serials'}>Сериалы</Link>,
  },
  {
    key: '12',
    label: <Link to={'/animations'}>Мультфильмы</Link>,
  },
];

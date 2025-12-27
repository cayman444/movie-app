import { useGetMovieQuery } from '@/shared/api/endpoints';
import { notification } from 'antd';
import { useNavigate } from 'react-router-dom';

export const useMoviePreview = () => {
  const { data: movie } = useGetMovieQuery({ id: 505898 });
  const navigate = useNavigate();
  const [api, contextHolder] = notification.useNotification({
    maxCount: 1,
    duration: 1,
    placement: 'bottom',
    pauseOnHover: false,
  });

  const openNotification = () => {
    api.open({
      message: 'Добавлено',
      type: 'info',
      style: { width: 300 },
    });
  };

  return { movie, contextHolder, navigate, openNotification };
};

import { useMediaQuery } from 'react-responsive';

export const useSlidesToShow = () => {
  const isLgSize = useMediaQuery({ query: '(width >= 1024px)' });
  const isMdSize = useMediaQuery({ query: '(width >= 768px)' });
  const isSmSize = useMediaQuery({ query: '(width >= 640px)' });

  const slidesToShow = isLgSize ? 5 : isMdSize ? 3 : isSmSize ? 2 : 1;

  return slidesToShow;
};

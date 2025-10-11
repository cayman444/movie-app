import { Container } from '@/app/layouts';
import { useGetPlayerQuery } from '@/shared/api/endpoints';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';
import { useParams } from 'react-router-dom';

export const Movie = () => {
  const { id } = useParams();
  const movieId = id || '';
  const { data: playersInfo } = useGetPlayerQuery(
    { id: movieId },
    { skip: !movieId }
  );

  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
      <iframe
        src={playersInfo?.[0].iframe}
        allowFullScreen
        className="w-full h-140"
      ></iframe>
    </Container>
  );
};

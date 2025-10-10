import { Container } from '@/app/layouts';
import { BreadcrumbPaths } from '@/widgets/breadcrumbs';

export const Movie = () => {
  return (
    <Container>
      <BreadcrumbPaths className="!mb-8" />
    </Container>
  );
};

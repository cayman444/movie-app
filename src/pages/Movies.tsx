import { useGetPremieresFilmsQuery } from '@/shared/api/endpoints';

const Movies = () => {
  const { data } = useGetPremieresFilmsQuery({
    month: 'SEPTEMBER',
    year: 2025,
  });

  console.log(data);

  return <div>Movies</div>;
};

export default Movies;

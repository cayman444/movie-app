import { useGetPremieresFilmsQuery } from '@/shared/api/endpoints';

export const MovieMain = () => {
  const { data } = useGetPremieresFilmsQuery({
    month: 'SEPTEMBER',
    year: 2025,
  });

  return (
    <div className="min-h-screen">
      <ul>
        {data?.items?.map((film) => (
          <li key={film.kinopoiskId}>
            {film.nameEn}
            <img src={film.posterUrl} alt={film.nameEn} />
          </li>
        ))}
      </ul>
    </div>
  );
};

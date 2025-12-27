export const formatMovieTime = (minutes?: number) => {
  if (!minutes) return '';

  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;

  return `${hours}:${mins.toString().padStart(2, '0')}:00`;
};

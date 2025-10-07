export const getMoviesYears = () => {
  return Array.from({ length: 60 }, (_, ind) => ({
    label: new Date().getFullYear() - ind,
    value: new Date().getFullYear() - ind,
  }));
};

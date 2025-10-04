export const getFilmType = (type: string) => {
  switch (type) {
    case 'FILM':
      return 'ФИЛЬМ';
    case 'TV_SHOW':
      return 'СЕРИАЛ';
    case 'TV_SERIES':
      return 'СЕРИАЛ';
    case 'MINI_SERIES':
      return 'МИНИ-СЕРИАЛ';
    default:
      return '';
  }
};

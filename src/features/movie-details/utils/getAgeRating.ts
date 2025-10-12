export const getAgeRating = (ageRating?: string) => {
  switch (ageRating) {
    case 'age18':
      return '18+';
    case 'age16':
      return '16+';
    case 'age12':
      return '12+';
    case 'age6':
      return '6+';
    case 'age0':
      return '0+';
    default:
      return 'Без рейтинга';
  }
};

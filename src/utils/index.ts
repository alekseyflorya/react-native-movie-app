export const getCustomDate = (date: string, type: string) => {
  const parsed = date.split('-');
  switch (type) {
    case 'year':
      return parsed[0];
    case 'month':
      return parsed[0];
    case 'day':
      return parsed[0];
    default:
      return '';
  }
};

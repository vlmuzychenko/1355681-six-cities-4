export const getRatingInPercent = (rating) => {
  return `${Math.round(rating) * 100 / 5}%`;
};

export const getPluralizedString = (count, noun, suffix = `s`) => {
  return `${count} ${noun}${count !== 1 ? suffix : ``}`;
};

export const getRatingInPercent = (rating) => {
  return `${Math.round(rating) * 100 / 5}%`;
};

export const getPluralizedString = (count, noun, suffix = `s`) => {
  return `${noun}${count !== 1 ? suffix : ``}`;
};

export const getItemsById = (items, id) => {
  return items.filter((item) => item.id === id);
};

export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (offers, city) => offers.filter((offer) => {
  return offer.city.name === city.name;
});

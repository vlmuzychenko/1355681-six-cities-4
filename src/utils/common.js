import {SortType} from "../const.js";

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

export const getSortedOffers = (offers, sortType) => {
  switch (sortType) {
    case SortType.PRICE_TO_HIGH:
      return [...offers].sort((a, b) => {
        return a.price - b.price;
      });
    case SortType.PRICE_TO_LOW:
      return [...offers].sort((a, b) => {
        return b.price - a.price;
      });
    case SortType.TOP_RATED:
      return [...offers].sort((a, b) => {
        return b.rating - a.rating;
      });
    default:
      return offers;
  }
};

export const getCitiesList = (offers, maxCities) => {
  const cities = [];
  offers.map((item) => cities.push(item.city));
  const unrepeatedCities = cities.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj.name).indexOf(obj.name) === pos;
  });

  return unrepeatedCities.slice(0, maxCities);
};

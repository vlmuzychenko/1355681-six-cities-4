import {getOffersByCity, getCitiesList} from "../../utils/common.js";
import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.DATA;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getCurrentOffers = (state) => {
  return getOffersByCity(state[NAME_SPACE].offers, state[NAME_SPACE].currentCity);
};

export const getCurrentOffer = (state, id) => {
  return state[NAME_SPACE].offers.find((offer) => offer.id === Number(id));
};

export const getCities = (state) => {
  return getCitiesList(state[NAME_SPACE].offers);
};

export const getCurrentCity = (state) => {
  return state[NAME_SPACE].currentCity;
};

export const getFavorites = (state) => {
  return state[NAME_SPACE].favorites;
};

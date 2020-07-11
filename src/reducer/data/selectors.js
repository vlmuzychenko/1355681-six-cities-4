import {getOffersByCity, getCitiesList} from "../../utils/common.js";
import NameSpace from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.DATA].offers;
};

export const getCurrentOffers = (state) => {
  return getOffersByCity(state[NameSpace.DATA].offers, state[NameSpace.DATA].currentCity);
};

export const getCities = (state) => {
  return getCitiesList(state[NameSpace.DATA].offers);
};

export const getCurrentCity = (state) => {
  return state[NameSpace.DATA].currentCity;
};

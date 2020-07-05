import offers from "./mocks/offers";
import {SortType, MAX_CITIES_IN_LIST} from "./const.js";
import {extend, getOffersByCity, getCitiesList} from "./utils/common.js";

const initialState = {
  offers,
  currentOffers: getOffersByCity(offers, offers[0].city),
  currentOffer: null,
  cities: getCitiesList(offers, MAX_CITIES_IN_LIST),
  currentCity: offers[0].city,
  activeSortType: SortType.DEFAULT,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  GET_OFFER: `GET_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    payload: getOffersByCity(offers, city),
  }),
  getOffer: (offer) => ({
    type: ActionType.GET_OFFER,
    payload: offer,
  }),
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: action.payload,
      });

    case ActionType.GET_OFFER:
      return extend(state, {
        currentOffer: action.payload,
      });

    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

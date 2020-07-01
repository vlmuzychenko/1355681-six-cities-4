import offers from "./mocks/offers";
import {extend, getOffersByCity} from "./utils/common.js";

const initialState = {
  currentCity: offers[0].city,
  currentOffers: getOffersByCity(offers, offers[0].city),
  offers,
};

const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  CHANGE_OFFERS: `CHANGE_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  changeOffers: (city) => ({
    type: ActionType.CHANGE_OFFERS,
    payload: getOffersByCity(offers, city),
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });

    case ActionType.CHANGE_OFFERS:
      return extend(state, {
        currentOffers: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

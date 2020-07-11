import {extend, getCitiesList} from "../../utils/common.js";
import {MAX_CITIES_IN_LIST} from "../../const.js";
import {offersModel} from "../../models/offers.js";

const initialState = {
  offers: [],
  currentCity: {},
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
};

const ActionCreator = {
  loadOffers: (offersData) => ({
    type: ActionType.LOAD_OFFERS,
    payload: offersData,
  }),
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};

const Operation = {
  loadOffers: () => (dispatch, getState, api) => {
    return api.get(`/hotels`)
      .then((response) => {
        dispatch(ActionCreator.loadOffers(offersModel(response.data)));
        dispatch(ActionCreator.changeCity(getCitiesList(offersModel(response.data), MAX_CITIES_IN_LIST)[0]));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.payload,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};

import {extend, getCitiesList} from "../../utils/common";
import {MAX_CITIES_IN_LIST} from "../../const";
import {offerModel, offersModel} from "../../models/offers";

const initialState = {
  offers: [],
  currentCity: {},
  favorites: [],
};

const ActionType = {
  LOAD_OFFERS: `LOAD_OFFERS`,
  CHANGE_CITY: `CHANGE_CITY`,
  LOAD_FAVORITES: `LOAD_FAVORITES`,
  TOGGLE_FAVORITE: `TOGGLE_FAVORITE`,
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
  loadFavorites: (offersData) => ({
    type: ActionType.LOAD_FAVORITES,
    payload: offersData,
  }),
  toggleFavorite: (offerData) => ({
    type: ActionType.TOGGLE_FAVORITE,
    payload: offerData,
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
  loadFavorites: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        dispatch(ActionCreator.loadFavorites(offersModel(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
  sendFavorite: (offerId, isFavorite) => (dispatch, getState, api) => {
    return api.post(`/favorite/${offerId}/${Number(isFavorite)}`)
      .then((response) => {
        dispatch(ActionCreator.toggleFavorite(offerModel(response.data)));
        dispatch(Operation.loadFavorites());
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
    case ActionType.LOAD_FAVORITES:
      return extend(state, {
        favorites: action.payload,
      });
    case ActionType.TOGGLE_FAVORITE:
      const updatedOffers = state.offers.map((offer) => {
        return offer.id === action.payload.id ? action.payload : offer;
      });

      return extend(state, {
        offers: updatedOffers,
      });
  }

  return state;
};

export {reducer, Operation, ActionType, ActionCreator};

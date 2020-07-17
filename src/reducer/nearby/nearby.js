import {offersModel} from "../../models/offers.js";

const initialState = {
  nearOffers: [],
};

const ActionType = {
  GET_NEAR_OFFERS: `GET_NEAR_OFFERS`,
};

const ActionCreator = {
  getNearOffers: (offers) => {
    return {
      type: ActionType.GET_NEAR_OFFERS,
      payload: offers,
    };
  },
};

const Operation = {
  getNearOffers: (offerId) => (dispatch, getState, api) => {
    return api.get(`/hotels/${offerId}/nearby`)
      .then((response) => {
        dispatch(ActionCreator.getNearOffers(offersModel(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_NEAR_OFFERS:
      return Object.assign({}, state, {
        nearOffers: action.payload,
      });
  }

  return state;
};


export {ActionCreator, ActionType, Operation, reducer};

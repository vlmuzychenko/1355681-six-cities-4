import {SortType} from "../../const.js";
import {extend} from "../../utils/common.js";

const initialState = {
  currentOffer: null,
  activeSortType: SortType.DEFAULT,
};

const ActionType = {
  GET_OFFER: `GET_OFFER`,
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
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

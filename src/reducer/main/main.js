import {SortType} from "../../const";
import {extend} from "../../utils/common";

const initialState = {
  activeSortType: SortType.DEFAULT,
};

const ActionType = {
  CHANGE_SORT_TYPE: `CHANGE_SORT_TYPE`,
};

const ActionCreator = {
  changeSortType: (sortType) => ({
    type: ActionType.CHANGE_SORT_TYPE,
    payload: sortType,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_SORT_TYPE:
      return extend(state, {
        activeSortType: action.payload,
      });
  }

  return state;
};

export {reducer, ActionType, ActionCreator};

import {reducer, ActionCreator, ActionType} from "./main";

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      activeSortType: SortTypeMock.DEFAULT,
    });
  });

  it(`Reducer should change sortType by a given sort type value`, () => {
    expect(reducer({
      activeSortType: SortTypeMock.DEFAULT,
    }, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypeMock.PRICE_TO_HIGH,
    })).toEqual({
      activeSortType: SortTypeMock.PRICE_TO_HIGH,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreator for change sort type returns correct action`, () => {
    expect(ActionCreator.changeSortType(SortTypeMock.PRICE_TO_HIGH))
      .toEqual({
        type: ActionType.CHANGE_SORT_TYPE,
        payload: SortTypeMock.PRICE_TO_HIGH,
      });
  });
});

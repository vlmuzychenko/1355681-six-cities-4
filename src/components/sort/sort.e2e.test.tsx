import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Sort from "./sort";

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The state should change when the mouse is on the offer`, () => {
  const onSortTypeClick = jest.fn();
  const onSortDropdownClick = jest.fn();

  const sort = shallow(
      <Sort
        onSortTypeClick={onSortTypeClick}
        onSortDropdownClick={onSortDropdownClick}
        activeSortType={SortTypeMock.DEFAULT}
        isOpened={false}
      />
  );

  const sortItem = sort.find(`.places__option`).at(2);

  sortItem.simulate(`click`);
  expect(onSortTypeClick).toHaveBeenCalledTimes(1);
  expect(onSortTypeClick.mock.calls[0][0]).toEqual(SortTypeMock.PRICE_TO_LOW);
});

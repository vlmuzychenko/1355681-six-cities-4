import React from "react";
import renderer from "react-test-renderer";
import Sort from "./sort.jsx";

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

it(`Should Sort render correctly`, () => {
  const tree = renderer
    .create(
        <Sort
          onSortTypeClick={() => {}}
          activeSortType={SortTypeMock.DEFAULT}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

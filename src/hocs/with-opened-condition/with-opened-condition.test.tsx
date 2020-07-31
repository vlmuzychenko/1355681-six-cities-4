import React from "react";
import renderer from "react-test-renderer";
import withOpenedCondition from "./with-opened-condition";
import {noop} from "../../utils/common";

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

const MockComponent = () => {
  return (
    <div></div>
  );
};

const MockComponentWrapped = withOpenedCondition(MockComponent);

it(`withOpenedCondition is rendered correctly`, () => {
  const tree = renderer.create((
    <MockComponentWrapped
      onSortTypeClick={noop}
      activeSortType={SortTypeMock.DEFAULT}
    />
  ), {
    createNodeMock() {
      return {};
    }
  }).toJSON();

  expect(tree).toMatchSnapshot();
});

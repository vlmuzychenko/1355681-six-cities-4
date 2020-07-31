import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";

const citiesMock = [
  {
    name: `Paris`,
    coords: [48.865, 2.35],
  },
  {
    name: `Amsterdam`,
    coords: [52.377956, 4.897070],
  }
];

const currentCityMock = {
  name: `Paris`,
  coords: [48.865, 2.35],
};

it(`Should Cites List render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities={citiesMock}
          currentCity={currentCityMock}
          onCityNameClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});



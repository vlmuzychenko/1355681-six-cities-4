import React from "react";
import renderer from "react-test-renderer";
import CitiesList from "./cities-list";
import {CityInterface} from "../../types";
import {noop} from "../../utils/common";

const citiesMock: CityInterface[] = [
  {
    name: `Paris`,
    coords: [48.865, 2.35],
    zoom: 12,
  },
  {
    name: `Amsterdam`,
    coords: [52.377956, 4.897070],
    zoom: 12,
  }
];

const currentCityMock: CityInterface = {
  name: `Paris`,
  coords: [48.865, 2.35],
  zoom: 12,
};

it(`Should Cites List render correctly`, () => {
  const tree = renderer
    .create(
        <CitiesList
          cities={citiesMock}
          currentCity={currentCityMock}
          onCityNameClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});



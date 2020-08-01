import React from "react";
import renderer from "react-test-renderer";
import City from "./city";
import {CityInterface} from "../../types";
import {noop} from "../../utils/common";

const cityMock: CityInterface = {
  name: `Paris`,
  coords: [48.865, 2.35],
  zoom: 12,
};

const isActiveTrueMock = true;
const isActiveFalseMock = false;

it(`Should Active City render correctly`, () => {
  const tree = renderer
    .create(
        <City
          city={cityMock}
          isActive={isActiveTrueMock}
          onCityNameClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`Should City render correctly`, () => {
  const tree = renderer
    .create(
        <City
          city={cityMock}
          isActive={isActiveFalseMock}
          onCityNameClick={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});



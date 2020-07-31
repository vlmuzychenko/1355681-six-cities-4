import React from "react";
import renderer from "react-test-renderer";
import City from "./city";

const cityMock = {
  name: `Paris`,
  coords: [48.865, 2.35],
};

const isActiveTrueMock = true;
const isActiveFalseMock = false;

it(`Should Active City render correctly`, () => {
  const tree = renderer
    .create(
        <City
          city={cityMock}
          isActive={isActiveTrueMock}
          onCityNameClick={() => {}}
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
          onCityNameClick={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});



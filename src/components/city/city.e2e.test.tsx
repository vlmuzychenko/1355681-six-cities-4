import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import City from "./city";
import {CityInterface} from "../../types";

const cityMock: CityInterface = {
  name: `Paris`,
  coords: [48.865, 2.35],
  zoom: 12,
};

const isActiveMock = false;

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should heading be pressed`, () => {
  const onCityNameClick = jest.fn();

  const main = shallow(
      <City
        city={cityMock}
        isActive={isActiveMock}
        onCityNameClick={onCityNameClick}
      />
  );

  const link = main.find(`.locations__item-link`);

  link.props().onClick();

  expect(onCityNameClick.mock.calls.length).toBe(1);
});

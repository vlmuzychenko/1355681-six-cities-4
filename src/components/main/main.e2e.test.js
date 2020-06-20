import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

const mock = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    photo: `img/apartment-01.jpg`,
    type: `apartment`,
    rating: 4,
    isPremium: true,
  },
  {
    title: `Wood and stone place`,
    price: 80,
    photo: `img/room.jpg`,
    type: `hotel`,
    rating: 4,
    isPremium: false,
  }
];

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should heading be pressed`, () => {
  const onHeadingClick = jest.fn();

  const main = shallow(
      <Main
        offersCount={1234}
        offers={mock}
        onHeadingClick={onHeadingClick}
      />
  );

  const heading = main.find(`.places__found`);

  heading.props().onClick();

  expect(onHeadingClick.mock.calls.length).toBe(1);
});

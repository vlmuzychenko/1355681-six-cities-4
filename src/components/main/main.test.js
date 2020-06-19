import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

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

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={1234}
      offers={mock}
      onHeadingClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

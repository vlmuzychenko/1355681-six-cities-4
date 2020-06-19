import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      offersCount={1234}
      offers={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

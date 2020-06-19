import React from "react";
import renderer from "react-test-renderer";
import OffersList from "./offers-list.jsx";

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

it(`Should Offer List render correctly`, () => {
  const tree = renderer
    .create(<OffersList
      offers={mock}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

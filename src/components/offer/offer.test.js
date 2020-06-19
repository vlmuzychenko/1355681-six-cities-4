import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";

const mock = {
  title: `Wood and stone place`,
  price: 80,
  photo: `room.jpg`,
  type: `hotel`,
  rating: 4,
  isPremium: false,
};

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(<Offer
      offer={mock}
      onOfferHover={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

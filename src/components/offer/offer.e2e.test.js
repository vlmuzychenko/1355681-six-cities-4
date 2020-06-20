import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Offer from "./offer";

const mock = {
  title: `Wood and stone place`,
  price: 80,
  photo: `room.jpg`,
  type: `hotel`,
  rating: 4,
  isPremium: false,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The state should change when the mouse is on the offer`, () => {
  const onOfferHover = jest.fn();

  const offer = shallow(
      <Offer
        offer={mock}
        onOfferHover={onOfferHover}
      />
  );

  offer.simulate(`mouseenter`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toMatchObject(mock);
});

it(`The state should change when the cursor leaves the card`, () => {
  const onOfferHover = jest.fn();

  const offer = shallow(
      <Offer
        offer={mock}
        onOfferHover={onOfferHover}
      />
  );

  offer.simulate(`mouseleave`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toEqual(null);
});

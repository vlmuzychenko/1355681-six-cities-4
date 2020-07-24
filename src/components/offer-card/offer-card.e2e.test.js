import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {OfferCard} from "./offer-card";

const offerCardMock = {
  id: 1,
  title: `Beautiful & luxurious apartment at great location`,
  price: 120,
  previewImage: `img/apartment-01.jpg`,
  images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
  description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
  rating: 4,
  isPremium: true,
  type: `apartment`,
  bedrooms: 4,
  maxAdults: 4,
  isFavorite: false,
  goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
  host: {
    name: `Angelina`,
    super: true,
    avatarUrl: `img/avatar-angelina.jpg`,
  },
  city: {
    name: `Paris`,
    coords: [48.865, 2.35],
  },
  coords: [52.3909553943508, 4.85309666406198],
};

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The state should change when the mouse is on the offer`, () => {
  const onOfferHover = jest.fn();

  const offerCard = shallow(
      <OfferCard
        authorizationStatus={AuthorizationStatusMock.NO_AUTH}
        offer={offerCardMock}
        onOfferHover={onOfferHover}
      />
  );

  offerCard.simulate(`mouseenter`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toMatchObject(offerCardMock);
});

it(`The state should change when the cursor leaves the card`, () => {
  const onOfferHover = jest.fn();

  const offerCard = shallow(
      <OfferCard
        authorizationStatus={AuthorizationStatusMock.NO_AUTH}
        offer={offerCardMock}
        onOfferHover={onOfferHover}
      />
  );

  offerCard.simulate(`mouseleave`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toEqual(null);
});

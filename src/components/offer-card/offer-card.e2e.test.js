import React from "react";
import Enzyme, {shallow, mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import OfferCard from "./offer-card";
import {BrowserRouter} from "react-router-dom";

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
  goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
  host: {
    name: `Angelina`,
    super: true,
    avatarUrl: `img/avatar-angelina.jpg`,
  },
  coords: [52.3909553943508, 4.85309666406198],
};

Enzyme.configure({
  adapter: new Adapter(),
});

it(`The state should change when the mouse is on the offer`, () => {
  const onOfferHover = jest.fn();
  const onOfferTitleClick = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offerCardMock}
        onOfferHover={onOfferHover}
        onOfferTitleClick={onOfferTitleClick}
      />
  );

  offerCard.simulate(`mouseenter`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toMatchObject(offerCardMock);
});

it(`The state should change when the cursor leaves the card`, () => {
  const onOfferHover = jest.fn();
  const onOfferTitleClick = jest.fn();

  const offerCard = shallow(
      <OfferCard
        offer={offerCardMock}
        onOfferHover={onOfferHover}
        onOfferTitleClick={onOfferTitleClick}
      />
  );

  offerCard.simulate(`mouseleave`);
  expect(onOfferHover).toHaveBeenCalledTimes(1);
  expect(onOfferHover.mock.calls[0][0]).toEqual(null);
});

it(`Shoud offer title be pressed`, () => {
  const onOfferHover = jest.fn();
  const onOfferTitleClick = jest.fn();

  const offerCard = mount(
      <BrowserRouter>
        <OfferCard
          offer={offerCardMock}
          onOfferHover={onOfferHover}
          onOfferTitleClick={onOfferTitleClick}
        />
      </BrowserRouter>
  );

  const link = offerCard.find(`.place-card__name a`);

  link.simulate(`click`);

  expect(onOfferTitleClick.mock.calls.length).toBe(1);
  expect(onOfferTitleClick.mock.calls[0][0]).toMatchObject(offerCardMock);
});

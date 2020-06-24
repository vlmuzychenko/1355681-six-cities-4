import React from "react";
import renderer from "react-test-renderer";
import Offer from "./offer.jsx";
import {BrowserRouter} from "react-router-dom";

const offerMock = {
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

it(`Should Offer render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Offer
            offer={offerMock}
            onOfferHover={() => {}}
          />
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

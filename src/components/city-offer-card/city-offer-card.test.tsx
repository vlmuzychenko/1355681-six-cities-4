import React from "react";
import renderer from "react-test-renderer";
import CityOfferCard from "./city-offer-card";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {OfferInterface} from "../../types";
import {noop} from "../../utils/common";

const mockStore = configureStore([]);

const offerCardMock: OfferInterface = {
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
    id: 1,
  },
  city: {
    name: `Paris`,
    coords: [48.865, 2.35],
    zoom: 12,
  },
  coords: [52.3909553943508, 4.85309666406198],
};

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const classNameMock = `cities__place-card`;

it(`Should City Offer render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: null,
    }
  });

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <CityOfferCard
              className={classNameMock}
              offer={offerCardMock}
              onOfferHover={noop}
            />
          </Provider>
        </BrowserRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

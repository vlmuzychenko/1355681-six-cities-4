import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space";
import {Provider} from "react-redux";
import {App} from "./app";
import {OfferInterface, CityInterface, AuthorizationInfoInterface} from "../../types";
import {noop} from "../../utils/common";

const mockStore = configureStore([]);

const offersMock: OfferInterface[] = [
  {
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
    coords: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
      zoom: 13,
    },
  },
  {
    id: 2,
    title: `Wood and stone place`,
    price: 80,
    previewImage: `img/room.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `hotel`,
    bedrooms: 4,
    maxAdults: 4,
    isFavorite: false,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 2,
    },
    coords: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
      zoom: 13,
    },
  }
];

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const authorizationInfoMock: AuthorizationInfoInterface = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

const cityMock: CityInterface = offersMock[0].city;

it(`Render App`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentCity: offersMock[0].city,
      offers: offersMock,
      currentOffer: null,
    },
    [NameSpace.MAIN]: {
      activeSortType: SortTypeMock.DEFAULT,
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatusMock.AUTH,
      authorizationInfo: authorizationInfoMock,
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            authorizationStatus={AuthorizationStatusMock.AUTH}
            authorizationInfo={authorizationInfoMock}
            currentOffers={offersMock.slice(0, 1)}
            currentCity={cityMock}
            onCityNameClick={noop}
            login={noop}
          />
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

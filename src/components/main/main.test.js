import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {Provider} from "react-redux";
import {Main} from "./main.jsx";
import {BrowserRouter} from "react-router-dom";

const mockStore = configureStore([]);

const offersMock = [
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
    },
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    },
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
    coords: [52.369553943508, 4.85309666406198],
  }
];

const currentCityMock = {
  name: `Paris`,
  coords: [48.865, 2.35],
};

const citiesMock = [
  {
    name: `Amsterdam`,
    coords: [48.865, 2.35],
  },
  {
    name: `Paris`,
    coords: [48.865, 2.35],
  },
  {
    name: `Berlin`,
    coords: [48.865, 2.35],
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

describe(`Main render correctly`, () => {
  it(`Should default Main render correctly`, () => {
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
        authorizationStatus: AuthorizationStatusMock.NO_AUTH,
        authorizationInfo: null,
      },
    });
    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <Main
                authorizationStatus={AuthorizationStatusMock.NO_AUTH}
                currentOffers={offersMock.slice(0, 2)}
                currentCity={currentCityMock}
                cities={citiesMock}
                onCityNameClick={() => {}}
                onSortTypeClick={() => {}}
                activeSortType={SortTypeMock.DEFAULT}
                onOfferHover={() => {}}
                hoveredOffer={null}
              />
            </Provider>
          </BrowserRouter>,
          {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it(`Should Main with hovered offer render correctly`, () => {
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
        authorizationStatus: AuthorizationStatusMock.NO_AUTH,
        authorizationInfo: null,
      },
    });
    const tree = renderer
      .create(
          <BrowserRouter>
            <Provider store={store}>
              <Main
                authorizationStatus={AuthorizationStatusMock.NO_AUTH}
                currentOffers={offersMock.slice(0, 1)}
                currentCity={currentCityMock}
                cities={citiesMock}
                onCityNameClick={() => {}}
                onSortTypeClick={() => {}}
                activeSortType={SortTypeMock.DEFAULT}
                onOfferHover={() => {}}
                hoveredOffer={offersMock[2]}
              />
            </Provider>
          </BrowserRouter>,
          {
            createNodeMock: () => document.createElement(`div`)
          }
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});

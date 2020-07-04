import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import {App} from "./app.jsx";

const mockStore = configureStore();

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
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
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
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [52.3909553943508, 4.85309666406198],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
  }
];

const currentCityMock = {
  name: `Paris`,
  coords: [48.865, 2.35],
};

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
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

it(`Render App`, () => {
  const store = mockStore({
    currentCity: offersMock[0].city,
    cities: citiesMock,
    currentOffers: offersMock.slice(0, 2),
    currentOffer: null,
    offers: offersMock,
    activeSortType: SortTypeMock.DEFAULT
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            currentOffers={offersMock.slice(0, 1)}
            currentOffer={offersMock[0]}
            currentCity={currentCityMock}
            activeSortType={SortTypeMock.DEFAULT}
            onCityNameClick={() => {}}
            onSortTypeClick={() => {}}
            onOfferTitleClick={() => {}}
          />
        </Provider>,
        {
          createNodeMock: () => document.createElement(`div`)
        }
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

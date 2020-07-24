import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import NameSpace from "../../reducer/name-space.js";
import {OfferDetails} from "./offer-details.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const mockStore = configureStore([]);

const offerMock = {
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

const reviewsMock = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`Should Offer Details render correctly`, () => {
  const store = mockStore({
    [NameSpace.DATA]: {
      currentOffer: offerMock,
    },
    [NameSpace.REVIEWS]: {
      currentReviews: reviewsMock,
    },
    [NameSpace.NEARBY]: {
      nearOffers: [offerMock],
    },
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: null,
    },
  });

  const onSubmit = jest.fn();
  const getOfferData = jest.fn();

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <OfferDetails
              id={`1`}
              authorizationStatus={AuthorizationStatusMock.NO_AUTH}
              offer={offerMock}
              nearOffers={[offerMock]}
              reviews={reviewsMock}
              onSubmit={onSubmit}
              getOfferData={getOfferData}
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

import MockAdapter from "axios-mock-adapter";
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";
import {createAPI} from "../../api.js";
import {offersModel} from "../../models/offers.js";

const api = createAPI(() => {});

const rawOffersMock = [
  {
    "bedrooms": 4,
    "city": {
      "location": {
        "latitude": 52.377956,
        "longitude": 4.897070,
        "zoom": 13
      },
      "name": `Amsterdam`
    },
    "description": `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    "goods": [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    "host": {
      "avatar_url": `img/avatar-angelina.jpg`,
      "id": 1,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.3909553943508,
      "longitude": 4.85309666406198,
      "zoom": 13
    },
    "max_adults": 4,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious apartment at great location`,
    "type": `apartment`
  }
];

const offersMock = [
  {
    id: 1,
    title: `Beautiful & luxurious apartment at great location`,
    price: 120,
    previewImage: `img/apartment-01.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4.8,
    isPremium: true,
    isFavorite: false,
    type: `apartment`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
      id: 1,
    },
    coords: [52.3909553943508, 4.85309666406198],
    zoom: 13,
    city: {
      name: `Amsterdam`,
      coords: [52.377956, 4.897070],
      zoom: 13,
    },
  },
];

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      offers: [],
      currentCity: {},
    });
  });

  it(`Reducer should change offers by a given value`, () => {
    expect(reducer({
      offers: [],
      currentCity: {},
    }, {
      type: ActionType.LOAD_OFFERS,
      payload: offersMock,
    })).toEqual({
      offers: offersMock,
      currentCity: {},
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for load offers returns correct action`, () => {
    expect(ActionCreator.loadOffers([
      {
        id: 1,
        title: `Beautiful & luxurious apartment at great location`,
        price: 120,
        previewImage: `img/apartment-01.jpg`,
        images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
        description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
        rating: 4.8,
        isPremium: true,
        isFavorite: false,
        type: `apartment`,
        bedrooms: 4,
        maxAdults: 4,
        goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
        host: {
          name: `Angelina`,
          super: true,
          avatarUrl: `img/avatar-angelina.jpg`,
          id: 1,
        },
        coords: [52.3909553943508, 4.85309666406198],
        zoom: 13,
        city: {
          name: `Amsterdam`,
          coords: [52.377956, 4.897070],
          zoom: 13,
        },
      },
    ])).toEqual({
      type: ActionType.LOAD_OFFERS,
      payload: [
        {
          id: 1,
          title: `Beautiful & luxurious apartment at great location`,
          price: 120,
          previewImage: `img/apartment-01.jpg`,
          images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
          description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
          rating: 4.8,
          isPremium: true,
          isFavorite: false,
          type: `apartment`,
          bedrooms: 4,
          maxAdults: 4,
          goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
          host: {
            name: `Angelina`,
            super: true,
            avatarUrl: `img/avatar-angelina.jpg`,
            id: 1,
          },
          coords: [52.3909553943508, 4.85309666406198],
          zoom: 13,
          city: {
            name: `Amsterdam`,
            coords: [52.377956, 4.897070],
            zoom: 13,
          },
        },
      ],
    });
  });

  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity({
      name: `Hamburg`,
      coords: [52.377956, 4.897070],
      zoom: 8,
    })).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {
        name: `Hamburg`,
        coords: [52.377956, 4.897070],
        zoom: 8,
      },
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, rawOffersMock);

    return offersLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: offersModel(rawOffersMock),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.CHANGE_CITY,
          payload: {
            name: `Amsterdam`,
            coords: [52.377956, 4.897070],
            zoom: 13,
          },
        });
      });
  });
});


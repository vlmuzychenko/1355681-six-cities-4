import {reducer, ActionCreator, ActionType} from "./reducer.js";
import {getOffersByCity, getCitiesList} from "./utils/common.js";

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
      name: `Amsterdam`,
      coords: [52.377956, 4.897070],
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
    coords: [52.369553943508, 4.85309666406198],
    city: {
      name: `Amsterdam`,
      coords: [52.377956, 4.897070],
    },
  },
  {
    id: 3,
    title: `Canal View Prinsengracht`,
    price: 132,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [52.3909553943508, 4.929309666406198],
    city: {
      name: `Amsterdam`,
      coords: [52.377956, 4.897070],
    },
  },
  {
    id: 4,
    title: `Nice, cozy, warm big bed apartment`,
    price: 180,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 5,
    isPremium: true,
    type: `room`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [52.3809553943508, 4.939309666406198],
    city: {
      name: `Amsterdam`,
      coords: [52.377956, 4.897070],
    },
  },

  {
    id: 5,
    title: `Paris Beautiful & luxurious apartment at great location`,
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
    coords: [48.86, 2.327],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
  },
  {
    id: 6,
    title: `Paris Wood and stone place`,
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
    coords: [48.853, 2.3498],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
  },
  {
    id: 7,
    title: `Canal View Prinsengracht`,
    price: 132,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [48.861111, 2.336389],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
  },
  {
    id: 8,
    title: `Paris Nice, cozy, warm big bed apartment`,
    price: 180,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 5,
    isPremium: true,
    type: `room`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [48.858222, 2.2945],
    city: {
      name: `Paris`,
      coords: [48.865, 2.35],
    },
  },
  {
    id: 9,
    title: `Cologne Nice, cozy, warm big bed apartment`,
    price: 180,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 5,
    isPremium: true,
    type: `room`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [50.9375, 6.958611],
    city: {
      name: `Cologne`,
      coords: [50.93, 6.953],
    },
  },

  {
    id: 10,
    title: `Cologne Beautiful & luxurious apartment at great location`,
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
    coords: [50.94129, 6.95817],
    city: {
      name: `Cologne`,
      coords: [50.93, 6.953],
    },
  },
  {
    id: 11,
    title: `Brussels Wood and stone place`,
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
    coords: [50.842222, 4.359444],
    city: {
      name: `Brussels`,
      coords: [50.85, 4.35]
    },
  },
  {
    id: 12,
    title: `Brussels Canal View Prinsengracht`,
    price: 132,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [50.851111, 4.36],
    city: {
      name: `Brussels`,
      coords: [50.85, 4.35]
    },
  },
  {
    id: 13,
    title: `Brussels Nice, cozy, warm big bed apartment`,
    price: 180,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 5,
    isPremium: true,
    type: `room`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [52.3809553943508, 4.939309666406198],
    city: {
      name: `Brussels`,
      coords: [50.85045, 4.34878],
    },
  },
  {
    id: 14,
    title: `Hamburg Canal View Prinsengracht`,
    price: 132,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [53.546111, 9.966111],
    city: {
      name: `Hamburg`,
      coords: [53.55, 9.993],
    },
  },
  {
    id: 15,
    title: `Hamburg Nice, cozy, warm big bed apartment`,
    price: 180,
    previewImage: `img/apartment-03.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 5,
    isPremium: true,
    type: `room`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [53.546111, 9.966111],
    city: {
      name: `Hamburg`,
      coords: [53.55, 9.993],
    },
  },
  {
    id: 16,
    title: `Dusseldorf Canal View Prinsengracht`,
    price: 132,
    previewImage: `img/apartment-02.jpg`,
    images: [`img/room.jpg`, `img/apartment-01.jpg`, `img/apartment-02.jpg`, `img/apartment-03.jpg`, `img/studio-01.jpg`, `img/apartment-01.jpg`],
    description: `An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.`,
    rating: 4,
    isPremium: false,
    type: `house`,
    bedrooms: 4,
    maxAdults: 4,
    goods: [`Wi-Fi`, `Washing machine`, `Towels`, `Heating`, `Coffee machine`, `Baby seat`, `Kitche`, `Dishwasher`, `Cabel TV`, `Fridge`],
    host: {
      name: `Angelina`,
      super: true,
      avatarUrl: `img/avatar-angelina.jpg`,
    },
    coords: [51.222282, 6.779263],
    city: {
      name: `Dusseldorf`,
      coords: [51.222, 6.77],
    },
  },
];

const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentCity: offersMock[0].city,
      cities: getCitiesList(offersMock),
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      currentOffer: null,
      offers: offersMock,
      activeSortType: SortTypeMock.DEFAULT,
    });
  });

  it(`Reducer should change currentCity by a given city value`, () => {
    expect(reducer({
      currentCity: offersMock[0].city,
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: {
        name: `Brussels`,
        coords: [50.85, 4.35]
      },
    })).toEqual({
      currentCity: {
        name: `Brussels`,
        coords: [50.85, 4.35]
      },
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    });

    expect(reducer({
      currentCity: offersMock[0].city,
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    }, {
      type: ActionType.CHANGE_CITY,
      payload: offersMock[0].city,
    })).toEqual({
      currentCity: offersMock[0].city,
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    });
  });

  it(`Reducer should change currentOffers by a given offers value`, () => {
    expect(reducer({
      currentCity: offersMock[0].city,
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    }, {
      type: ActionType.GET_OFFERS,
      payload: offersMock.slice(2, 3),
    })).toEqual({
      currentCity: offersMock[0].city,
      currentOffers: offersMock.slice(2, 3),
      offersMock,
    });

    expect(reducer({
      currentCity: offersMock[2].city,
      currentOffers: getOffersByCity(offersMock, offersMock[0].city),
      offersMock,
    }, {
      type: ActionType.GET_OFFERS,
      payload: offersMock.slice(2, 3),
    })).toEqual({
      currentCity: offersMock[2].city,
      currentOffers: offersMock.slice(2, 3),
      offersMock,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.changeCity({
      name: `Brussels`,
      coords: [50.85, 4.35]
    })).toEqual({
      type: ActionType.CHANGE_CITY,
      payload: {
        name: `Brussels`,
        coords: [50.85, 4.35]
      },
    });
  });

  it(`Action creator for change city returns correct action`, () => {
    expect(ActionCreator.getOffers({
      name: `Brussels`,
      coords: [50.85, 4.35]
    })).toEqual({
      type: ActionType.GET_OFFERS,
      payload: getOffersByCity(offersMock, {
        name: `Brussels`,
        coords: [50.85, 4.35]
      }),
    });
  });
});


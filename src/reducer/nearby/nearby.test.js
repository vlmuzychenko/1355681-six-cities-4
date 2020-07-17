import {reducer, ActionCreator, ActionType} from "./nearby.js";

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      nearOffers: [],
    });
  });

  it(`Reducer should change nearOffers by a given value`, () => {
    expect(reducer({
      nearOffers: [],
    }, {
      type: ActionType.GET_NEAR_OFFERS,
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
    })).toEqual({
      nearOffers: [
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
});

describe(`Action creators work correctly`, () => {

  it(`ActionCreator for change near offers returns correct action`, () => {
    expect(ActionCreator.getNearOffers({
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
    })).toEqual({
      type: ActionType.GET_NEAR_OFFERS,
      payload: {
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
      }
    });
  });
});

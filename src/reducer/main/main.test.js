import {reducer, ActionCreator, ActionType} from "./main.js";


const SortTypeMock = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentOffer: null,
      activeSortType: SortTypeMock.DEFAULT,
    });
  });

  it(`Reducer should change sortType by a given sort type value`, () => {
    expect(reducer({
      currentOffer: null,
      activeSortType: SortTypeMock.DEFAULT,
    }, {
      type: ActionType.CHANGE_SORT_TYPE,
      payload: SortTypeMock.PRICE_TO_HIGH,
    })).toEqual({
      currentOffer: null,
      activeSortType: SortTypeMock.PRICE_TO_HIGH,
    });
  });

  it(`Reducer should change currentOffer by a given offer value`, () => {
    expect(reducer({
      currentOffer: null,
      activeSortType: SortTypeMock.DEFAULT,
    }, {
      type: ActionType.GET_OFFER,
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
      },
    })).toEqual({
      currentOffer: {
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
      activeSortType: SortTypeMock.DEFAULT,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreator for change sort type returns correct action`, () => {
    expect(ActionCreator.changeSortType(SortTypeMock.PRICE_TO_HIGH))
      .toEqual({
        type: ActionType.CHANGE_SORT_TYPE,
        payload: SortTypeMock.PRICE_TO_HIGH,
      });
  });

  it(`ActionCreator for change current offer returns correct action`, () => {
    expect(ActionCreator.getOffer({
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
      type: ActionType.GET_OFFER,
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


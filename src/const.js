export const OfferTypes = new Map([
  [`apartment`, `Apartment`],
  [`room`, `Private Room`],
  [`house`, `House`],
  [`hotel`, `Hotel`],
]);

export const PlaceCardTypes = {
  CITY: `city`,
  NEAR: `near`,
};

export const SortType = {
  DEFAULT: `popular`,
  PRICE_TO_HIGH: `to-high`,
  PRICE_TO_LOW: `to-low`,
  TOP_RATED: `top-rated`,
};

export const SORTS = [
  {
    type: SortType.DEFAULT,
    text: `Popular`,
  },
  {
    type: SortType.PRICE_TO_HIGH,
    text: `Price: low to high`,
  },
  {
    type: SortType.PRICE_TO_LOW,
    text: `Price: high to low`,
  },
  {
    type: SortType.TOP_RATED,
    text: `Top rated first`,
  },
];

export const RatingType = {
  PERFECT: `perfect`,
  GOOD: `good`,
  NOT_BAD: `not bad`,
  BADLY: `badly`,
  TERRIBLY: `terribly`,
};

export const RATINGS = [
  {
    type: RatingType.PERFECT,
    value: `5`,
  },
  {
    type: RatingType.GOOD,
    value: `4`,
  },
  {
    type: RatingType.NOT_BAD,
    value: `3`,
  },
  {
    type: RatingType.BADLY,
    value: `2`,
  },
  {
    type: RatingType.TERRIBLY,
    value: `1`,
  },
];

export const MapIconUrl = {
  DEFAULT: `img/pin.svg`,
  ACTIVE: `img/pin-active.svg`,
};

export const MAX_CITIES_IN_LIST = 6;

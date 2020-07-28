import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.MAIN;

export const getOffers = (state) => {
  return state[NAME_SPACE].offers;
};

export const getActiveSortType = (state) => {
  return state[NAME_SPACE].activeSortType;
};

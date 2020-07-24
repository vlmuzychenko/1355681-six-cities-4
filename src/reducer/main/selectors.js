import NameSpace from "../name-space.js";

export const getOffers = (state) => {
  return state[NameSpace.MAIN].offers;
};

export const getCurrentOffer = (state) => {
  return state[NameSpace.MAIN].currentOffer;
};

export const getActiveSortType = (state) => {
  return state[NameSpace.MAIN].activeSortType;
};

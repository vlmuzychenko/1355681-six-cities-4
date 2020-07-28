import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.NEARBY;

export const getNearOffers = (state) => {
  return state[NAME_SPACE].nearOffers;
};

import NameSpace from "../name-space.js";

const NAME_SPACE = NameSpace.REVIEWS;

export const getCurrentReviews = (state) => {
  return state[NAME_SPACE].currentReviews;
};

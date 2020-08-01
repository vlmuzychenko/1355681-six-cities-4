import NameSpace from "../name-space";

const NAME_SPACE = NameSpace.USER;

export const getAuthorizationStatus = (state) => {
  return state[NAME_SPACE].authorizationStatus;
};

export const getAuthorizationInfo = (state) => {
  return state[NAME_SPACE].authorizationInfo;
};

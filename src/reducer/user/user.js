import {authorizationInfoModel} from "../../models/authorization-info";
import {AppRoute} from "../../const";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authorizationInfo: null,
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_AUTHORIZATION_INFO: `GET_AUTHORIZATION_INFO`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  getAuthorizationInfo: (info) => {
    return {
      type: ActionType.GET_AUTHORIZATION_INFO,
      payload: info,
    };
  }
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(`/login`)
      .then((response) => {
        dispatch(ActionCreator.getAuthorizationInfo(authorizationInfoModel(response.data)));
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      })
      .catch((err) => {
        throw err;
      });
  },

  login: (authData, history) => (dispatch, getState, api) => {
    return api.post(`/login`, {
      email: authData.login,
      password: authData.password,
    })
      .then((response) => {
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.getAuthorizationInfo(authorizationInfoModel(response.data)));
        history.push(AppRoute.ROOT);
      })
      .catch((err) => {
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.GET_AUTHORIZATION_INFO:
      return Object.assign({}, state, {
        authorizationInfo: action.payload,
      });
  }

  return state;
};


export {ActionCreator, ActionType, AuthorizationStatus, Operation, reducer};

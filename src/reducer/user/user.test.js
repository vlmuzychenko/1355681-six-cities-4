import MockAdapter from "axios-mock-adapter";
import {reducer, ActionCreator, ActionType, Operation} from "./user.js";
import {createAPI} from "../../api.js";
import {authorizationInfoModel} from "../../models/authorization-info.js";

const api = createAPI(() => {});

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const rawAuthorizationInfo = {
  "avatar_url": `img/1.png`,
  "email": `Oliver.conner@gmail.com`,
  "id": 1,
  "is_pro": false,
  "name": `Oliver.conner`
};

const authorizationInfoMock = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`
};

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: null,
    });
  });

  it(`Reducer should change authorization status by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: null,
    }, {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatusMock.AUTH,
    })).toEqual({
      authorizationStatus: AuthorizationStatusMock.AUTH,
      authorizationInfo: null,
    });
  });

  it(`Reducer should change authorization info by a given value`, () => {
    expect(reducer({
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: null,
    }, {
      type: ActionType.GET_AUTHORIZATION_INFO,
      payload: authorizationInfoModel(rawAuthorizationInfo),
    })).toEqual({
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationInfo: authorizationInfoMock,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for authorization status returns correct action`, () => {
    expect(ActionCreator.requireAuthorization(AuthorizationStatusMock.AUTH)).toEqual({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatusMock.AUTH,
    });
  });

  it(`Action creator for authorization info returns correct action`, () => {
    expect(ActionCreator.getAuthorizationInfo({
      avatarUrl: `img/1.png`,
      email: `Oliver.conner@gmail.com`,
      id: 1,
      isPro: false,
      name: `Oliver.conner`
    })).toEqual({
      type: ActionType.GET_AUTHORIZATION_INFO,
      payload: {
        avatarUrl: `img/1.png`,
        email: `Oliver.conner@gmail.com`,
        id: 1,
        isPro: false,
        name: `Oliver.conner`
      },
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /login`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const checkAuth = Operation.checkAuth();

    apiMock
      .onGet(`/login`)
      .reply(200, rawAuthorizationInfo);

    return checkAuth(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_AUTHORIZATION_INFO,
          payload: authorizationInfoModel(rawAuthorizationInfo),
        });
        expect(dispatch).toHaveBeenNthCalledWith(2, {
          type: ActionType.REQUIRED_AUTHORIZATION,
          payload: AuthorizationStatusMock.AUTH,
        });
      });
  });
});


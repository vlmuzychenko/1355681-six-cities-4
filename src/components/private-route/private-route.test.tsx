import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from 'react-router-dom';
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import PrivateRoute from "./private-route";

const mockStore = configureStore([]);

const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  OFFER: `/offer`,
  FAVORITES: `/favorites`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`Shoud PrivateRoute render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationData: {},
    }
  });

  const render = jest.fn();

  const tree = renderer
    .create(
        <BrowserRouter>
          <Provider store={store}>
            <PrivateRoute
              render={render}
              path={AppRoute.FAVORITES}
              exact={true}
              authStatus={AuthorizationStatus.AUTH} />
          </Provider>
        </BrowserRouter>
    )
        .toJSON();

  expect(tree).toMatchSnapshot();
});

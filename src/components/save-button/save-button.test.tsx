import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space";
import SaveButton from "./save-button";

const mockStore = configureStore([]);

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`Should SaveButton render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationData: {},
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SaveButton
            isFavorite={true}
            authorizationStatus={AuthorizationStatusMock.AUTH}
            offerId={1}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import SaveButton from "./save-button.jsx";

const mockStore = configureStore([]);

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

it(`Should SaveButton render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatus.NO_AUTH,
      authorizationData: {},
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <SaveButton
            isFavorite={true}
            authStatus={AuthorizationStatus.AUTH}
            offerId={1}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

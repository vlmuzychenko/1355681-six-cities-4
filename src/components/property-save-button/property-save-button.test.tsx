import React from "react";
import renderer from "react-test-renderer";
import configureStore from "redux-mock-store";
import {Provider} from "react-redux";
import NameSpace from "../../reducer/name-space.js";
import PropertySaveButton from "./property-save-button";

const mockStore = configureStore([]);

const AuthorizationStatusMock = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const cardClassNameMock = `property__bookmark-button`;
const iconClassNameMock = `property__bookmark-icon`;
const widthMock = `31`;
const heightMock = `33`;

it(`Should PropertySaveButton render correctly`, () => {
  const store = mockStore({
    [NameSpace.USER]: {
      authorizationStatus: AuthorizationStatusMock.NO_AUTH,
      authorizationData: {},
    }
  });

  const tree = renderer
    .create(
        <Provider store={store}>
          <PropertySaveButton
            className={cardClassNameMock}
            iconClassName={iconClassNameMock}
            width={widthMock}
            height={heightMock}
            isFavorite={true}
            authStatus={AuthorizationStatusMock.AUTH}
            offerId={1}
          />
        </Provider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});


import React from "react";
import renderer from "react-test-renderer";
import Header from "./header";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {AuthorizationInfoInterface} from "../../types";

const history = createMemoryHistory(`/`);

const authorizationStatusMock = `AUTH`;

const authorizationInfoMock: AuthorizationInfoInterface = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`,
};

it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <Router history={history}>
          <Header
            authorizationStatus={authorizationStatusMock}
            authorizationInfo={authorizationInfoMock}
          />
        </Router>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

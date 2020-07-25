import React from "react";
import renderer from "react-test-renderer";
import Header from "./header.jsx";

const authorizationStatusMock = `AUTH`;

const authorizationInfoMock = {
  avatarUrl: `img/1.png`,
  email: `Oliver.conner@gmail.com`,
  id: 1,
  isPro: false,
  name: `Oliver.conner`,
};

it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <Header
          authorizationStatus={authorizationStatusMock}
          authorizationInfo={authorizationInfoMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

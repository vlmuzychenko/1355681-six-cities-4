import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in";
import {noop} from "../../utils/common";

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(
        <SignIn
          onSubmit={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

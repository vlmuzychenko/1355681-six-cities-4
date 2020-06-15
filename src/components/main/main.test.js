import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main render correctly`, () => {
  const tree = renderer
    .create(<Main
      offersCount={1234}
      offersTitles={[`Beautiful & luxurious apartment at great location`, `Wood and stone place`]}
      onHeadingClick={() => {}}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import renderer from "react-test-renderer";
import Review from "./review";
import {ReviewInterface} from "../../types";

const reviewMock: ReviewInterface = {
  id: 1,
  user: {
    name: `Max`,
    avatarUrl: `img/avatar-max.jpg`,
    isPro: false,
    id: 1,
  },
  rating: 4,
  comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
  date: `2019-04-24T14:00:00.000Z`,
};

it(`Should Review render correctly`, () => {
  const tree = renderer
    .create(
        <Review
          review={reviewMock}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

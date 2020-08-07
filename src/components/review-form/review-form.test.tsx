import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";
import {noop} from "../../utils/common";

it(`Should Reviews List render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          comment={``}
          rating={``}
          formDisabled={false}
          buttonDisabled={true}
          showError={false}
          onCommentChange={noop}
          onRatingChange={noop}
          onReviewFormSubmit={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

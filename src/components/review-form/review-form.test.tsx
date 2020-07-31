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
          handleCommentChange={noop}
          handleRatingChange={noop}
          handleReviewFormSubmit={noop}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

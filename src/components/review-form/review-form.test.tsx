import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form";

it(`Should Reviews List render correctly`, () => {
  const tree = renderer
    .create(
        <ReviewForm
          comment={``}
          rating={``}
          formDisabled={false}
          buttonDisabled={true}
          showError={false}
          handleCommentChange={() => {}}
          handleRatingChange={() => {}}
          handleReviewFormSubmit={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

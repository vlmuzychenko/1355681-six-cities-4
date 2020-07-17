import React from "react";
import renderer from "react-test-renderer";
import ReviewForm from "./review-form.jsx";

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
          handleSubmit={() => {}}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

import React from "react";
import Review from "../review/review";
import moment from "moment";
import {ReviewInterface} from "../../types";

interface Props {
  reviews: ReviewInterface[];
}

const ReviewsList: React.FunctionComponent<Props> = (props: Props) => {
  const {reviews} = props;
  const sortedReviews = reviews.sort((a, b) => Number(moment(a.date)) - Number(moment(b.date)));
  const slisedReviews = sortedReviews.slice(0, 10);


  return (
    <ul className="reviews__list">
      {slisedReviews
        .map((review, index) => {
          return (
            <Review
              key={review.id + index}
              review={review}
            />
          );
        })
      }
    </ul>
  );
};

export default ReviewsList;

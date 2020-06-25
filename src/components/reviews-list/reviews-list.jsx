import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import moment from "moment";

const ReviewsList = (props) => {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {reviews
        .sort((a, b) => {
          return moment(a) - moment(b);
        })
        .slice(0, 10)
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }),
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ),
};

export default ReviewsList;

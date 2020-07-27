import React from "react";
import PropTypes from "prop-types";
import Review from "../review/review.jsx";
import moment from "moment";

const ReviewsList = (props) => {
  const {reviews} = props;
  const sortedReviews = reviews.sort((a, b) => moment(a.date) - moment(b.date));
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

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        user: PropTypes.shape({
          name: PropTypes.string.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
  ),
};

export default ReviewsList;

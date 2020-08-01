import React from "react";
import moment from "moment";
import {getRatingInPercent} from "../../utils/common";
import {ReviewInterface} from "../../types";

interface Props {
  review: ReviewInterface;
}

const Review: React.FunctionComponent<Props> = (props: Props) => {
  const {review: {user, rating, comment, date}} = props;

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={moment(date).format(`YYYY-DD-MM`)}>{moment(date).format(`MMMM YYYY`)}</time>
      </div>
    </li>
  );
};

export default Review;

import React from "react";
import {RATINGS} from "../../const";

interface Props {
  comment: string;
  rating: string;
  formDisabled: boolean;
  buttonDisabled: boolean;
  showError: boolean;
  onCommentChange: () => void;
  onRatingChange: () => void;
  onReviewFormSubmit: () => void;
}

const ReviewForm: React.FunctionComponent<Props> = (props: Props) => {
  const {comment, rating, formDisabled, buttonDisabled, showError, onCommentChange, onRatingChange, onReviewFormSubmit} = props;

  return (
    <form
      className={`reviews__form form`}
      action="#"
      method="post"
      onSubmit={onReviewFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATINGS.map((ratingItem, index) => {
          return (
            <React.Fragment key={ratingItem.type + index}>
              <input
                className="form__rating-input visually-hidden" name="rating"
                value={ratingItem.value}
                id={`${ratingItem.value}-stars`}
                type="radio"
                onChange={onRatingChange}
                checked={rating === ratingItem.value ? true : false}
                disabled={formDisabled}
              />
              <label htmlFor={`${ratingItem.value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          );
        })}

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={onCommentChange}
        disabled={formDisabled}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={formDisabled || buttonDisabled}>
            Submit
        </button>
      </div>
      {showError ? <p className="reviews__help">Server Error</p> : null}
    </form>
  );
};

export default ReviewForm;

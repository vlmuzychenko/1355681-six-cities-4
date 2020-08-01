import {reviewsModel} from "../../models/reviews";

const initialState = {
  currentReviews: [],
};

const ActionType = {
  GET_REVIEWS: `GET_REVIEWS`,
  POST_REVIEW: `POST_REVIEW`,
};

const ActionCreator = {
  getReviews: (reviews) => {
    return {
      type: ActionType.GET_REVIEWS,
      payload: reviews,
    };
  },
  sendReview: (review) => {
    return {
      type: ActionType.POST_REVIEW,
      payload: review,
    };
  }
};

const Operation = {
  getReviews: (offerId) => (dispatch, getState, api) => {
    return api.get(`/comments/${offerId}`)
      .then((response) => {
        dispatch(ActionCreator.getReviews(reviewsModel(response.data)));
      })
      .catch((err) => {
        throw err;
      });
  },

  sendReview: (offerId, reviewData, resetForm) => (dispatch, getState, api) => {
    return api.post(`/comments/${offerId}`, {
      comment: reviewData.comment,
      rating: reviewData.rating,
    })
      .then((response) => {
        dispatch(ActionCreator.getReviews(reviewsModel(response.data)));
        resetForm();
      })
      .catch((err) => {
        resetForm(false);
        throw err;
      });
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_REVIEWS:
      return Object.assign({}, state, {
        currentReviews: action.payload,
      });
  }

  return state;
};


export {ActionCreator, ActionType, Operation, reducer};

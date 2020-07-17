import MockAdapter from "axios-mock-adapter";
import {reducer, ActionCreator, ActionType, Operation} from "./reviews.js";
import {createAPI} from "../../api.js";
import {reviewsModel} from "../../models/reviews.js";

const api = createAPI(() => {});

const rawReviewsMock = [
  {
    "comment": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "date": `2019-05-08T14:13:56.569Z`,
    "id": 1,
    "rating": 4,
    "user": {
      "avatar_url": `img/1.png`,
      "id": 4,
      "is_pro": false,
      "name": `Max`
    }
  }
];

const reviewsMock = [
  {
    comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    date: `2019-05-08T14:13:56.569Z`,
    id: 1,
    rating: 4,
    user: {
      avatarUrl: `img/1.png`,
      id: 4,
      isPro: false,
      name: `Max`
    }
  }
];

describe(`Reducer works correctly`, () => {
  it(`Reducer without additional parameters should return initial state`, () => {
    expect(reducer(void 0, {})).toEqual({
      currentReviews: [],
    });
  });

  it(`Reducer should change currentReviews by a given value`, () => {
    expect(reducer({
      currentReviews: [],
    }, {
      type: ActionType.GET_REVIEWS,
      payload: reviewsMock,
    })).toEqual({
      currentReviews: reviewsMock,
    });
  });
});

describe(`Action creators work correctly`, () => {
  it(`ActionCreator for get reviews returns correct action`, () => {
    expect(ActionCreator.getReviews(reviewsMock))
      .toEqual({
        type: ActionType.GET_REVIEWS,
        payload: reviewsMock,
      });
  });

  it(`ActionCreator for send review returns correct action`, () => {
    expect(ActionCreator.sendReview({
      rating: 4,
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    })).toEqual({
      type: ActionType.POST_REVIEW,
      payload: {
        rating: 4,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      }
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /comments/id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const reviewsLoader = Operation.getReviews(1);

    apiMock
      .onGet(`/comments/1`)
      .reply(200, rawReviewsMock);

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.GET_REVIEWS,
          payload: reviewsModel(rawReviewsMock),
        });
      });
  });

  it(`Should make a correct API call to post /comments/id`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const resetForm = jest.fn();
    const reviewsLoader = Operation.sendReview(`/comments/1`, {
      rating: 4,
      comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    });

    apiMock
      .onPost(`/comments/1`)
      .reply(200, {
        rating: 4,
        comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      });

    return reviewsLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.POST_REVIEW,
          payload: {
            rating: 4,
            comment: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
          },
        });
      })
      .catch(() => {
        resetForm();
      });
  });
});

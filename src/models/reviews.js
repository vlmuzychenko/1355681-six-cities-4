const reviewModel = (review) => {
  const {
    comment,
    date,
    id,
    rating,
    user
  } = review;

  return {
    id,
    user: {
      name: user.name,
      avatarUrl: user.avatar_url,
      id: user.id,
      isPro: user.is_pro,
    },
    rating,
    comment,
    date,
  };
};

export const reviewsModel = (reviews) => {
  return reviews.map((review) => {
    return reviewModel(review);
  });
};

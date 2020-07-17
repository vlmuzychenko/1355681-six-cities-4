const offerModel = (offer) => {
  const {
    bedrooms,
    city,
    description,
    goods,
    host,
    id,
    images,
    is_favorite: isFavorite,
    is_premium: isPremium,
    location,
    max_adults: maxAdults,
    preview_image: previewImage,
    price,
    rating,
    title,
    type,
  } = offer;

  return {
    id,
    title,
    price,
    previewImage,
    images,
    description,
    rating,
    isPremium,
    isFavorite,
    type,
    bedrooms,
    maxAdults,
    goods,
    host: {
      name: host.name,
      super: host.is_pro,
      avatarUrl: host.avatar_url,
      id: host.id,
    },
    coords: [location.latitude, location.longitude],
    zoom: location.zoom,
    city: {
      name: city.name,
      coords: [city.location.latitude, city.location.longitude],
      zoom: city.location.zoom,
    },
  };
};

export const offersModel = (offers) => {
  return offers.map((offer) => {
    return offerModel(offer);
  });
};

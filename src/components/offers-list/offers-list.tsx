import React from "react";
import PropTypes from "prop-types";
import CityOfferCard from "../city-offer-card/city-offer-card.jsx";
import NearOfferCard from "../near-offer-card/near-offer-card.jsx";
import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import {PlaceCardTypes} from "../../const.js";

const _getOfferCardByType = (offer, type, onOfferHover) => {
  switch (type) {
    case PlaceCardTypes.CITY:
      return (
        <CityOfferCard
          key={offer.price + offer.title}
          offer={offer}
          onOfferHover={onOfferHover}
        />
      );
    case PlaceCardTypes.NEAR:
      return (
        <NearOfferCard
          key={offer.price + offer.title}
          offer={offer}
        />
      );
    case PlaceCardTypes.FAVORITE:
      return (
        <FavoriteOfferCard
          key={offer.price + offer.title}
          offer={offer}
        />
      );
    default:
      return (
        <OfferCard
          key={offer.price + offer.title}
          offer={offer}
          onOfferHover={onOfferHover}
        />
      );
  }
};

const OffersList = (props) => {
  const {offers, onOfferHover, type, className} = props;

  return (
    <div className={`places__list ${className || ``}`}>
      {offers.map((offer) => {
        return _getOfferCardByType(offer, type, onOfferHover);
      })}
    </div>
  );
};

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        previewImage: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        type: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        maxAdults: PropTypes.number.isRequired,
        goods: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.shape({
          name: PropTypes.string.isRequired,
          super: PropTypes.bool.isRequired,
          avatarUrl: PropTypes.string.isRequired,
        }).isRequired,
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          coords: PropTypes.arrayOf(PropTypes.number).isRequired,
        }).isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ).isRequired,
  onOfferHover: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string
};

export default OffersList;

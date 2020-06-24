import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {getRatingInPercent} from "../../utils/common.js";
import {OfferTypes} from "../../const.js";

const Offer = (props) => {
  const {offer, onOfferHover, onOfferTitleClick} = props;
  const {title, price, previewImage, type, rating, isPremium} = offer;
  const premiumMark = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``;

  return (
    <article
      className="cities__place-card place-card"
      key={offer.price + offer.rating}
      onMouseEnter={() => onOfferHover(offer)}
      onMouseLeave={() => onOfferHover(null)}
    >
      {premiumMark}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to='/offer' onClick={() => onOfferTitleClick(offer)}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypes.get(type)}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
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
    }),
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  onOfferHover: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

export default Offer;

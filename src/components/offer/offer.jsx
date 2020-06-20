import React from "react";
import PropTypes from "prop-types";

const Offer = (props) => {
  const {offer, onOfferHover} = props;
  const {title, price, photo, type, rating, isPremium} = offer;

  const ratingStyle = {
    width: `${rating * 100 / 5}%`
  };
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
          <img className="place-card__image" src={photo} width="260" height="200" alt="Place image"/>
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
            <span style={ratingStyle}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    photo: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isPremium: PropTypes.bool.isRequired,
  }).isRequired,
  onOfferHover: PropTypes.func.isRequired
};

export default Offer;

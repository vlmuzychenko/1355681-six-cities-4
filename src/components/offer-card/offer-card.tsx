import React from "react";
import SaveButton from "../save-button/save-button";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getRatingInPercent} from "../../utils/common";
import {OfferTypes} from "../../const";
import {getAuthorizationStatus} from "../../reducer/user/selectors";
import {OfferInterface} from "../../types";

interface Props {
  authorizationStatus: string;
  offer: OfferInterface;
  className?: string;
  imageWrapperClassName?: string;
  onOfferHover: (offer) => void;
}

const OfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const {authorizationStatus, offer, onOfferHover, className, imageWrapperClassName} = props;
  const {id, title, price, previewImage, type, rating, isPremium, isFavorite} = offer;
  const premiumMark = isPremium ? <div className="place-card__mark"><span>Premium</span></div> : ``;

  return (
    <article
      className={`place-card ${className || ``}`}
      key={offer.price + offer.rating}
      onMouseEnter={onOfferHover ? () => onOfferHover(offer) : null}
      onMouseLeave={onOfferHover ? () => onOfferHover(null) : null}
    >
      {premiumMark}
      <div className={`place-card__image-wrapper ${imageWrapperClassName || ``}`}>
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
          <SaveButton
            authorizationStatus={authorizationStatus}
            isFavorite={isFavorite}
            offerId={id}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: getRatingInPercent(rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{OfferTypes.get(type)}</p>
      </div>
    </article>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
});

export {OfferCard};
export default connect(mapStateToProps, null)(OfferCard);

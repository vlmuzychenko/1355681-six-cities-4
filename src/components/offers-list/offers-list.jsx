import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import CityOfferCard from "../city-offer-card/city-offer-card.jsx";
import NearOfferCard from "../near-offer-card/near-offer-card.jsx";
import OfferCard from "../offer-card/offer-card.jsx";
import {PlaceCardTypes} from "../../const.js";

class OffersList extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferHover = this._handleOfferHover.bind(this);

    this.state = {
      activeOffer: null
    };
  }

  _handleOfferHover(offer) {
    this.setState({
      activeOffer: offer
    });
  }

  _getOfferCardByType(type, offer, onOfferTitleClick, index) {
    switch (type) {
      case PlaceCardTypes.CITY:
        return (
          <CityOfferCard
            key={offer.price + index}
            offer={offer}
            onOfferHover={this._handleOfferHover}
            onOfferTitleClick={onOfferTitleClick}
          />
        );
      case PlaceCardTypes.NEAR:
        return (
          <NearOfferCard
            key={offer.price + index}
            offer={offer}
            onOfferHover={this._handleOfferHover}
            onOfferTitleClick={onOfferTitleClick}
          />
        );
      default:
        return (
          <OfferCard
            key={offer.price + index}
            offer={offer}
            onOfferHover={this._handleOfferHover}
            onOfferTitleClick={onOfferTitleClick}
          />
        );
    }
  }

  render() {
    const {offers, onOfferTitleClick, type, className} = this.props;

    return (
      <div className={`places__list ${className || ``}`}>
        {offers.map((offer, index) => {
          return this._getOfferCardByType(type, offer, onOfferTitleClick, index);
        })}
      </div>
    );
  }
}

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
        }),
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ),
  onOfferTitleClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  className: PropTypes.string
};

export default OffersList;

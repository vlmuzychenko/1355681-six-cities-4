import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import Offer from "../offer/offer.jsx";

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

  render() {
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => {
          return (
            <Offer
              key={offer.price + offer.rating}
              offer={offer}
              onOfferHover={this._handleOfferHover}
            />
          );
        })}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  )
};

export default OffersList;

import React, {PureComponent} from "react";
import {OfferInterface, CityInterface} from "../../types";

interface Props {
  authorizationStatus: string;
  currentOffers: OfferInterface[];
  currentCity: CityInterface;
  onCityNameClick: () => void;
}

interface State {
  hoveredOffer: OfferInterface;
}

const withHoveredOffer = (Component) => {
  class WithHoveredOffer extends PureComponent<Props, State> {
    constructor(props) {
      super(props);

      this._handleOfferHover = this._handleOfferHover.bind(this);

      this.state = {
        hoveredOffer: null
      };
    }

    _handleOfferHover(offer) {
      this.setState({
        hoveredOffer: offer,
      });
    }

    render() {
      return (
        <Component
          {...this.props}
          onOfferHover={this._handleOfferHover}
          hoveredOffer={this.state.hoveredOffer}
        />
      );
    }
  }

  return WithHoveredOffer;
};

export default withHoveredOffer;

import React, {PureComponent} from "react";

const withHoveredOffer = (Component) => {
  class WithHoveredOffer extends PureComponent {
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

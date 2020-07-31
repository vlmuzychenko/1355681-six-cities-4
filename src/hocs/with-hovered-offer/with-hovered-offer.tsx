import React, {PureComponent} from "react";
import {Subtract} from "utility-types";
import {OfferInterface} from "../../types";

interface InjectingProps {
  hoveredOffer: OfferInterface[];
  onOfferHover: () => void;
}

interface State {
  hoveredOffer: OfferInterface;
}

const withHoveredOffer = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithHoveredOffer extends PureComponent<T, State> {
    constructor(props: T) {
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

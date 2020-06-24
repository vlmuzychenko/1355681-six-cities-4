import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";

const headingClickHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);

    this.state = {
      currentOffer: null
    };
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      currentOffer: offer
    });
  }

  render() {
    const {offersCount, offers} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              offersCount={offersCount}
              offers={offers}
              onHeadingClick={headingClickHandler}
              onOfferTitleClick={this._handleOfferTitleClick}
            />
          </Route>
          <Route exact path="/offer">
            <OfferDetails
              offer={this.state.currentOffer} />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
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
  )
};

export default App;

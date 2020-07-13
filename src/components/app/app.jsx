import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import withHoveredOffer from "../../hocs/with-hovered-offer/with-hovered-offer.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {ActionCreator as MainActionCreator} from "../../reducer/main/main.js";
import {getCurrentOffers, getCurrentCity} from "../../reducer/data/selectors.js";
import {getCurrentOffer} from "../../reducer/main/selectors.js";
import {getAuthorizationStatus} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

const MainWithHoveredOffer = withHoveredOffer(Main);

const App = (props) => {
  const {
    authorizationStatus,
    login,
    currentOffers,
    currentCity,
    currentOffer,
    onCityNameClick,
    onOfferTitleClick,
  } = props;

  const _renderMainScreen = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <MainWithHoveredOffer
          authorizationStatus={authorizationStatus}
          currentOffers={currentOffers}
          currentCity={currentCity}
          onOfferTitleClick={onOfferTitleClick}
          onCityNameClick={onCityNameClick}
        />
      );
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn
          onSubmit={login}
        />
      );
    }

    return null;
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          {_renderMainScreen()}
        </Route>
        <Route exact path="/offer">
          <OfferDetails
            authorizationStatus={authorizationStatus}
            offer={currentOffer}
            currentCity={currentCity}
            onOfferTitleClick={onOfferTitleClick}
          />
        </Route>
        <Route exact path="/dev-login">
          <SignIn
            onSubmit={login}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  login: PropTypes.func.isRequired,
  currentOffers: PropTypes.arrayOf(
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
      }).isRequired
  ),
  currentOffer: PropTypes.shape({
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
  }),
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }),
  onCityNameClick: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    currentOffers: getCurrentOffers(state),
    currentCity: getCurrentCity(state),
    currentOffer: getCurrentOffer(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onCityNameClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
  onOfferTitleClick(offer) {
    dispatch(MainActionCreator.getOffer(offer));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


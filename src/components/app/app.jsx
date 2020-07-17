import React from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import withHoveredOffer from "../../hocs/with-hovered-offer/with-hovered-offer.js";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {getCurrentOffers, getCurrentCity} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";

const MainWithHoveredOffer = withHoveredOffer(Main);

const App = (props) => {
  const {
    authorizationStatus,
    authorizationInfo,
    login,
    currentOffers,
    currentCity,
    onCityNameClick,
  } = props;

  const _renderMainScreen = () => {
    if (authorizationStatus === AuthorizationStatus.AUTH) {
      return (
        <MainWithHoveredOffer
          authorizationStatus={authorizationStatus}
          currentOffers={currentOffers}
          currentCity={currentCity}
          onCityNameClick={onCityNameClick}
        >
          <Header
            authorizationStatus={authorizationStatus}
            authorizationInfo={authorizationInfo} />
        </MainWithHoveredOffer>
      );
    } else if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      return (
        <SignIn
          onSubmit={login}
        >
          <Header
            authorizationStatus={authorizationStatus}
            authorizationInfo={authorizationInfo} />
        </SignIn>
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
          >
            <Header
              authorizationStatus={authorizationStatus}
              authorizationInfo={authorizationInfo} />
          </OfferDetails>
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
  authorizationInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
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
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }),
  onCityNameClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    authorizationStatus: getAuthorizationStatus(state),
    authorizationInfo: getAuthorizationInfo(state),
    currentOffers: getCurrentOffers(state),
    currentCity: getCurrentCity(state),
  };
};

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData));
  },
  onCityNameClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


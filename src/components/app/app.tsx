import React, {Fragment} from "react";
import Main from "../main/main.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import Header from "../header/header.jsx";
import PropTypes from "prop-types";
import withHoveredOffer from "../../hocs/with-hovered-offer/with-hovered-offer.js";
import PrivateRoute from "../private-route/private-route.jsx";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Switch, Route, Router, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data.js";
import {getCurrentOffers, getCurrentCity} from "../../reducer/data/selectors.js";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors.js";
import {Operation as UserOperation} from "../../reducer/user/user.js";
import history from "../../history.js";
import {AppRoute} from "../../const.js";
import Favorites from "../favorites/favorites.jsx";

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

  return (
    <Router history={history}>
      <Switch>
        <Route
          path={AppRoute.ROOT}
          exact
          render={() => (
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
          )}
        />
        <Route
          path={AppRoute.OFFER}
          exact
          render={({match}) => (
            <OfferDetails
              authorizationStatus={authorizationStatus}
              id={match.params.id}
            >
              <Header
                authorizationStatus={authorizationStatus}
                authorizationInfo={authorizationInfo} />
            </OfferDetails>
          )}
        />
        <Route
          path={AppRoute.LOGIN}
          exact
          render={() => (
            authorizationStatus === AuthorizationStatus.AUTH
              ? <Redirect to={AppRoute.ROOT} />
              : <SignIn onSubmit={login}>
                <Header
                  authorizationStatus={authorizationStatus}
                  authorizationInfo={authorizationInfo} />
              </SignIn>
          )}
        />
        <PrivateRoute
          path={AppRoute.FAVORITES}
          exact
          render={() => (
            <Favorites>
              <Header
                authorizationStatus={authorizationStatus}
                authorizationInfo={authorizationInfo} />
            </Favorites>
          )}
        />
        <Route
          render={() => (
            <Fragment>
              <h1>
                404.
                <br />
                <small>Page not found</small>
              </h1>
              <Link to={AppRoute.ROOT}>Go to main page</Link>
            </Fragment>
          )}
        />
      </Switch>
    </Router>
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  authorizationInfo: getAuthorizationInfo(state),
  currentOffers: getCurrentOffers(state),
  currentCity: getCurrentCity(state),
});

const mapDispatchToProps = (dispatch) => ({
  login(authData) {
    dispatch(UserOperation.login(authData, history));
  },
  onCityNameClick(city) {
    dispatch(DataActionCreator.changeCity(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


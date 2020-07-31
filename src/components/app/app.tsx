import React, {Fragment} from "react";
import Main from "../main/main";
import SignIn from "../sign-in/sign-in";
import OfferDetails from "../offer-details/offer-details";
import Header from "../header/header";
import withHoveredOffer from "../../hocs/with-hovered-offer/with-hovered-offer";
import PrivateRoute from "../private-route/private-route";
import {AuthorizationStatus} from "../../reducer/user/user";
import {Switch, Route, Router, Redirect, Link} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator as DataActionCreator} from "../../reducer/data/data";
import {getCurrentOffers, getCurrentCity} from "../../reducer/data/selectors";
import {getAuthorizationStatus, getAuthorizationInfo} from "../../reducer/user/selectors";
import {Operation as UserOperation} from "../../reducer/user/user";
import history from "../../history";
import {AppRoute} from "../../const";
import Favorites from "../favorites/favorites";
import {OfferInterface, CityInterface, AuthorizationInfoInterface} from "../../types";

interface Props {
  authorizationStatus: string;
  authorizationInfo: AuthorizationInfoInterface;
  currentOffers?: OfferInterface[];
  currentCity?: CityInterface;
  login: () => void;
  onCityNameClick: () => void;
}

const MainWithHoveredOffer = withHoveredOffer(Main);

const App: React.FunctionComponent<Props> = (props: Props) => {
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


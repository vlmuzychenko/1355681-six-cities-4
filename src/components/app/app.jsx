import React, {PureComponent} from "react";
import Main from "../main/main.jsx";
import OfferDetails from "../offer-details/offer-details.jsx";
import PropTypes from "prop-types";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer.js";
import {SortType} from "../../const.js";
import {getSortedOffers} from "../../utils/common.js";

const headingClickHandler = () => {};

class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handleOfferTitleClick = this._handleOfferTitleClick.bind(this);
    this._handleSortTypeClick = this._handleSortTypeClick.bind(this);
    this._handleOfferHover = this._handleOfferHover.bind(this);

    this.state = {
      currentOffer: null,
      activeSortType: SortType.DEFAULT,
      hoveredOffer: null
    };
  }

  _handleOfferTitleClick(offer) {
    this.setState({
      currentOffer: offer,
    });
  }

  _handleSortTypeClick(sortType) {
    this.setState({
      activeSortType: sortType,
    });
  }

  _handleOfferHover(offer) {
    this.setState({
      hoveredOffer: offer
    });
  }

  render() {
    const {currentOffers, currentCity, offers, onCityNameClick} = this.props;

    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Main
              currentOffers={getSortedOffers(currentOffers, this.state.activeSortType)}
              currentCity={currentCity}
              offers={offers}
              onHeadingClick={headingClickHandler}
              onOfferTitleClick={this._handleOfferTitleClick}
              onSortTypeClick={this._handleSortTypeClick}
              activeSortType={this.state.activeSortType}
              onCityNameClick={onCityNameClick}
              onOfferHover={this._handleOfferHover}
              hoveredOffer={this.state.hoveredOffer}
            />
          </Route>
          <Route exact path="/offer">
            <OfferDetails
              offer={this.state.currentOffer}
              currentCity={currentCity}
              onOfferTitleClick={this._handleOfferTitleClick}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
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
        }).isRequired,
        city: PropTypes.shape({
          name: PropTypes.string.isRequired,
          coords: PropTypes.arrayOf(PropTypes.number).isRequired,
        }).isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      })
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currentCity: state.currentCity,
  currentOffers: state.currentOffers,
  offers: state.offers,
});

const mapDispatchToProps = (dispatch) => ({
  onCityNameClick(city) {
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.changeOffers(city));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);


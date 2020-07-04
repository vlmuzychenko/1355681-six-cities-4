import React from "react";
import PropTypes from "prop-types";
import CityOffersList from "../city-offers-list/city-offers-list.jsx";
import CitiesList from "../cities-list/cities-list.jsx";
import Map from "../map/map.jsx";
import Sort from "../sort/sort.jsx";

const Main = (props) => {
  const {
    currentOffers,
    currentCity,
    offers,
    onHeadingClick,
    onOfferTitleClick,
    onCityNameClick,
    onSortTypeClick,
    activeSortType,
    onOfferHover,
    hoveredOffer
  } = props;

  const cities = [];
  offers.map((item) => cities.push(item.city));
  const unrepeatedCities = cities.filter((obj, pos, arr) => {
    return arr.map((mapObj) => mapObj.name).indexOf(obj.name) === pos;
  });

  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList
              cities={unrepeatedCities}
              currentCity={currentCity}
              onCityNameClick={onCityNameClick}
            />
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found" onClick={onHeadingClick}>{currentOffers.length} places to stay in {currentCity.name}</b>
                <Sort
                  onSortTypeClick={onSortTypeClick}
                  activeSortType={activeSortType}
                />
                <CityOffersList
                  offers={currentOffers}
                  onOfferTitleClick={onOfferTitleClick}
                  onOfferHover={onOfferHover}
                />

              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <Map
                    offers={currentOffers}
                    currentCity={currentCity}
                    hoveredOffer={hoveredOffer}
                  />
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
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
      })
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
      }).isRequired
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  onHeadingClick: PropTypes.func.isRequired,
  onOfferTitleClick: PropTypes.func.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  activeSortType: PropTypes.string.isRequired,
  onOfferHover: PropTypes.func.isRequired,
  hoveredOffer: PropTypes.shape({
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
};

export default Main;

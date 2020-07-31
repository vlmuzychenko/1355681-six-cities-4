import React, {PureComponent} from "react";
import FavoritesOffersList from "../favorites-offers-list/favorites-offers-list";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {getFavorites} from "../../reducer/data/selectors";
import {Operation as DataOperation} from "../../reducer/data/data";
import {AppRoute, MAX_CITIES_IN_LIST} from "../../const";
import {getCitiesList} from "../../utils/common";
import {OfferInterface} from "../../types";

interface Props {
  children: React.ReactNode;
  favorites: OfferInterface[];
  onFavoritesPageLoad: () => void;
}

class Favorites extends PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFavoritesPageLoad();
  }

  render() {
    const {favorites} = this.props;
    const cities = getCitiesList(favorites, MAX_CITIES_IN_LIST);

    return (
      <div className={`page ${!favorites.length && `page--favorites-empty`}`}>
        {this.props.children}

        <main className={`page__main page__main--favorites ${!favorites.length && `page__main--favorites-empty`}`}>
          <div className="page__favorites-container container">
            <section className={`favorites ${!favorites.length && `favorites--empty`}`}>
              {favorites.length ?
                <React.Fragment>
                  <h1 className="favorites__title">Saved listing</h1>
                  <ul className="favorites__list">
                    {cities.map((city, index) => {
                      return (
                        <li key={`${city.name}_${index}`} className="favorites__locations-items">
                          <div className="favorites__locations locations locations--current">
                            <div className="locations__item">
                              <a className="locations__item-link" href="#">
                                <span>{city.name}</span>
                              </a>
                            </div>
                          </div>
                          <FavoritesOffersList
                            offers={favorites.filter((offer) => offer.city.name === city.name)}
                          />
                        </li>
                      );
                    })}
                  </ul>
                </React.Fragment> :
                <React.Fragment>
                  <h1 className="visually-hidden">Favorites (empty)</h1>
                  <div className="favorites__status-wrapper">
                    <b className="favorites__status">Nothing yet saved.</b>
                    <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
                  </div>
                </React.Fragment>
              }
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to={AppRoute.ROOT}>
            <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
          </Link>
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: getFavorites(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFavoritesPageLoad() {
    dispatch(DataOperation.loadFavorites());
  },
});

export {Favorites};
export default connect(mapStateToProps, mapDispatchToProps)(Favorites);

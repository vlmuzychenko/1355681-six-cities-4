import React from "react";
import CityOffersList from "../city-offers-list/city-offers-list";
import CitiesList from "../cities-list/cities-list";
import Map from "../map/map";
import Sort from "../sort/sort";
import NoResults from "../no-results/no-results";
import withOpenedCondition from "../../hocs/with-opened-condition/with-opened-condition";
import {connect} from "react-redux";
import {ActionCreator as MainActionCreator} from "../../reducer/main/main";
import {getCities} from "../../reducer/data/selectors";
import {getActiveSortType} from "../../reducer/main/selectors";
import {getSortedOffers} from "../../utils/common";
import {OfferInterface, CityInterface} from "../../types";

interface Props {
  children: React.ReactNode;
  currentOffers?: OfferInterface[];
  hoveredOffer?: OfferInterface;
  cities?: CityInterface[];
  currentCity?: CityInterface;
  activeSortType: string;
  onCityNameClick: () => void;
  onSortTypeClick: () => void;
  onOfferHover: () => void;
}

const SortWrapped = withOpenedCondition(Sort);

const Main: React.FunctionComponent<Props> = (props: Props) => {
  const {
    currentOffers,
    currentCity,
    cities,
    onCityNameClick,
    onSortTypeClick,
    activeSortType,
    onOfferHover,
    hoveredOffer
  } = props;


  return (
    <React.Fragment>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
      </div>

      <div className="page page--gray page--main">

        {props.children}

        <main className={`page__main page__main--index ${!currentOffers.length ? `page__main--index-empty` : ``}`}>
          <h1 className="visually-hidden">Cities</h1>
          <div className="tabs">
            <CitiesList
              cities={cities}
              currentCity={currentCity}
              onCityNameClick={onCityNameClick}
            />
          </div>
          <div className="cities">
            <div className={`cities__places-container container ${!currentOffers.length ? `cities__places-container--empty` : ``}`}>
              {currentOffers.length ?
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{currentOffers.length} places to stay in {currentCity.name}</b>
                  <SortWrapped
                    onSortTypeClick={onSortTypeClick}
                    activeSortType={activeSortType}
                  />
                  <CityOffersList
                    offers={getSortedOffers(currentOffers, activeSortType)}
                    onOfferHover={onOfferHover}
                  />
                </section> : <NoResults/>
              }
              <div className="cities__right-section">
                {currentOffers.length ?
                  <section className="cities__map map">
                    <Map
                      offers={currentOffers}
                      currentCity={currentCity}
                      hoveredOffer={hoveredOffer}
                    />
                  </section> : ``
                }
              </div>
            </div>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => ({
  activeSortType: getActiveSortType(state),
  cities: getCities(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSortTypeClick(sortType) {
    dispatch(MainActionCreator.changeSortType(sortType));
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);

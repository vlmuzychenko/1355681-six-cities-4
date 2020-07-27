import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import ReviewsList from "../reviews-list/reviews-list.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import NearOffersList from "../near-offers-list/near-offers-list.jsx";
import Map from "../map/map.jsx";
import PropertySaveButton from "../property-save-button/property-save-button.jsx";
import withHandleForm from "../../hocs/with-handle-form/with-handle-form.js";
import {getRatingInPercent, getPluralizedString} from "../../utils/common.js";
import {connect} from "react-redux";
import {Operation as ReviewsOperation} from "../../reducer/reviews/reviews.js";
import {Operation as NearbyOperation} from "../../reducer/nearby/nearby.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {getCurrentOffer} from "../../reducer/data/selectors.js";
import {getCurrentReviews} from "../../reducer/reviews/selectors.js";
import {getNearOffers} from "../../reducer/nearby/selectors.js";
import {OfferTypes} from "../../const.js";

const ReviewFormWithHandler = withHandleForm(ReviewForm);

class OfferDetails extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {id, getOfferData} = this.props;
    getOfferData(id);
  }

  componentDidUpdate(prevProps) {
    const {id, getOfferData} = this.props;

    if (id !== prevProps.id) {
      getOfferData(id);
    }
  }

  render() {
    const {authorizationStatus, currentOffer, currentReviews, nearOffers, onSubmit} = this.props;
    if (!currentOffer) {
      return null;
    }
    const {id, title, price, images, description, rating, isPremium, type, bedrooms, maxAdults, goods, host, city, isFavorite} = currentOffer;
    const premiumMark = isPremium ? <div className="property__mark"><span>Premium</span></div> : ``;

    return (
      <React.Fragment>
        <div style={{display: `none`}}>
          <svg xmlns="http://www.w3.org/2000/svg"><symbol id="icon-arrow-select" viewBox="0 0 7 4"><path fillRule="evenodd" clipRule="evenodd" d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"></path></symbol><symbol id="icon-bookmark" viewBox="0 0 17 18"><path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"></path></symbol><symbol id="icon-star" viewBox="0 0 13 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"></path></symbol></svg>
        </div>

        <div className="page">
          {this.props.children}

          <main className="page__main page__main--property">
            <section className="property">
              <div className="property__gallery-container container">
                <div className="property__gallery">
                  {images.map((image, index) => {
                    return (
                      <div className="property__image-wrapper" key={image + index}>
                        <img className="property__image" src={image} alt="Photo studio" />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="property__container container">
                <div className="property__wrapper">
                  {premiumMark}
                  <div className="property__name-wrapper">
                    <h1 className="property__name">
                      {title}
                    </h1>
                    <PropertySaveButton
                      authorizationStatus={authorizationStatus}
                      isFavorite={isFavorite}
                      offerId={id}
                    />
                  </div>
                  <div className="property__rating rating">
                    <div className="property__stars rating__stars">
                      <span style={{width: getRatingInPercent(rating)}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                    <span className="property__rating-value rating__value">{rating}</span>
                  </div>
                  <ul className="property__features">
                    <li className="property__feature property__feature--entire">
                      {OfferTypes.get(type)}
                    </li>
                    <li className="property__feature property__feature--bedrooms">
                      {bedrooms} {getPluralizedString(bedrooms, `Bedroom`)}
                    </li>
                    <li className="property__feature property__feature--adults">
                      Max {maxAdults} {getPluralizedString(maxAdults, `adult`)}
                    </li>
                  </ul>
                  <div className="property__price">
                    <b className="property__price-value">&euro;{price}</b>
                    <span className="property__price-text">&nbsp;night</span>
                  </div>
                  <div className="property__inside">
                    <h2 className="property__inside-title">What&apos;s inside</h2>
                    <ul className="property__inside-list">
                      {goods.map((good, index) => {
                        return (
                          <li className="property__inside-item" key={good + index}>
                            {good}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="property__host">
                    <h2 className="property__host-title">Meet the host</h2>
                    <div className="property__host-user user">
                      <div className={`property__avatar-wrapper user__avatar-wrapper ${host.super ? `property__avatar-wrapper--pro` : `` }`}>
                        <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar" />
                      </div>
                      <span className="property__user-name">
                        {host.name}
                      </span>
                    </div>
                    <div className="property__description">
                      <p className="property__text">
                        {description}
                      </p>
                    </div>
                  </div>
                  <section className="property__reviews reviews">
                    <h2 className="reviews__title">{getPluralizedString(currentReviews.length, `Review`)} &middot; <span className="reviews__amount">{currentReviews.length}</span></h2>
                    <ReviewsList
                      reviews={currentReviews}
                    />
                    {authorizationStatus === AuthorizationStatus.AUTH ?
                      <ReviewFormWithHandler
                        offerId={id}
                        onSubmit={onSubmit} />
                      : ``}
                  </section>
                </div>
              </div>
              <section className="property__map map">
                <Map
                  currentOffer={currentOffer}
                  currentCity={city}
                  offers={nearOffers}
                />
              </section>
            </section>
            <div className="container">
              <section className="near-places places">
                <h2 className="near-places__title">Other places in the neighbourhood</h2>
                <NearOffersList
                  offers={nearOffers}
                />
              </section>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

OfferDetails.propTypes = {
  children: PropTypes.element,
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
    isFavorite: PropTypes.bool.isRequired,
  }),
  nearOffers: PropTypes.arrayOf(PropTypes.shape({
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
  })),
  currentReviews: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      avatarUrl: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      isPro: PropTypes.bool.isRequired,
    }),
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  })),
  onSubmit: PropTypes.func,
  getOfferData: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  currentOffer: getCurrentOffer(state, ownProps.id),
  currentReviews: getCurrentReviews(state),
  nearOffers: getNearOffers(state),
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(offerId, reviewInfo, resetForm) {
    dispatch(ReviewsOperation.sendReview(offerId, reviewInfo, resetForm));
  },
  getOfferData(offerId) {
    dispatch(ReviewsOperation.getReviews(offerId));
    dispatch(NearbyOperation.getNearOffers(offerId));
  }
});

export {OfferDetails};
export default connect(mapStateToProps, mapDispatchToProps)(OfferDetails);

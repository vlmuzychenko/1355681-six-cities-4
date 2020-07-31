import React from "react";
import CityOfferCard from "../city-offer-card/city-offer-card";
import NearOfferCard from "../near-offer-card/near-offer-card";
import FavoriteOfferCard from "../favorite-offer-card/favorite-offer-card";
import OfferCard from "../offer-card/offer-card";
import {PlaceCardTypes} from "../../const";
import {OfferInterface} from "../../types";

interface Props {
  offers: OfferInterface[];
  type?: string;
  className?: string;
  onOfferHover?: () => void;
}

const _getOfferCardByType = (offer, type, onOfferHover) => {
  switch (type) {
    case PlaceCardTypes.CITY:
      return (
        <CityOfferCard
          key={offer.price + offer.title}
          offer={offer}
          onOfferHover={onOfferHover}
        />
      );
    case PlaceCardTypes.NEAR:
      return (
        <NearOfferCard
          key={offer.price + offer.title}
          offer={offer}
        />
      );
    case PlaceCardTypes.FAVORITE:
      return (
        <FavoriteOfferCard
          key={offer.price + offer.title}
          offer={offer}
        />
      );
    default:
      return (
        <OfferCard
          key={offer.price + offer.title}
          offer={offer}
          onOfferHover={onOfferHover}
        />
      );
  }
};

const OffersList: React.FunctionComponent<Props> = (props: Props) => {
  const {offers, onOfferHover, type, className} = props;

  return (
    <div className={`places__list ${className || ``}`}>
      {offers.map((offer) => {
        return _getOfferCardByType(offer, type, onOfferHover);
      })}
    </div>
  );
};

export default OffersList;

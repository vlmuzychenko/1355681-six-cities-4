import React from "react";
import OffersList from "../offers-list/offers-list";
import {PlaceCardTypes} from "../../const";
import {OfferInterface} from "../../types";

interface Props {
  className?: string;
  type?: string;
  offers: OfferInterface[];
  onOfferHover?: () => void;
}

const FavoritesOffersList: React.FunctionComponent<Props> = (props: Props) => {
  const className = `favorites__list ${props.className || ``}`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OffersList
      type={PlaceCardTypes.FAVORITE}
      className={className}
      {...restProps}
    />
  );
};

export default FavoritesOffersList;

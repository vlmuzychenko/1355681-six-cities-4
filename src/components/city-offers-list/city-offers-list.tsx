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

const CityOffersList: React.FunctionComponent<Props> = (props: Props) => {
  const className = `cities__places-list tabs__content ${props.className || ``}`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OffersList
      type={PlaceCardTypes.CITY}
      className={className}
      {...restProps}
    />
  );
};

export default CityOffersList;

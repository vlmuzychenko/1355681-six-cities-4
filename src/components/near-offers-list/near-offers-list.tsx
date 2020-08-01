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

const NearOffersList: React.FunctionComponent<Props> = (props: Props) => {
  const className = `near-places__list ${props.className || ``}`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OffersList
      type={PlaceCardTypes.NEAR}
      className={className}
      {...restProps}
    />
  );
};

export default NearOffersList;

import React from "react";
import OfferCard from "../offer-card/offer-card";
import {OfferInterface} from "../../types";

interface Props {
  className?: string;
  offer: OfferInterface;
  onOfferHover: () => void;
}

const CityOfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const className = `cities__place-card ${props.className || ``}`;
  const imageWrapperClassName = `cities__image-wrapper`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OfferCard
      className={className}
      imageWrapperClassName={imageWrapperClassName}
      {...restProps}
    />
  );
};

export default CityOfferCard;

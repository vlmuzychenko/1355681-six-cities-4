import React from "react";
import OfferCard from "../offer-card/offer-card";
import {OfferInterface} from "../../types";

interface Props {
  offer: OfferInterface;
  className?: string;
  imageWrapperClassName?: string;
  onOfferHover?: (offer) => void;
}

const FavoriteOfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const className = `favorites__card ${props.className || ``}`;
  const imageWrapperClassName = `favorites__image-wrapper`;

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

export default FavoriteOfferCard;

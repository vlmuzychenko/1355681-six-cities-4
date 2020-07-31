import React from "react";
import OfferCard from "../offer-card/offer-card";
import {OfferInterface} from "../../types";

interface Props {
  className?: string;
  offer: OfferInterface;
}

const NearOfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const className = `near-places__card ${props.className || ``}`;
  const imageWrapperClassName = `near-places__image-wrapper`;

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

export default NearOfferCard;

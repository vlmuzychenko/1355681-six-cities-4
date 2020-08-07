import React from "react";
import OfferCard from "../offer-card/offer-card";
import {Subtract} from "utility-types";

interface InjectingProps {
  className?: string;
  imageWrapperClassName?: string;
}

type P = React.ComponentProps<typeof OfferCard>;
type T = Subtract<P, InjectingProps>;

const CityOfferCard: React.FunctionComponent<T> = (props: T) => {
  const className = `cities__place-card`;
  const imageWrapperClassName = `cities__image-wrapper`;

  const restProps = Object.assign({}, props);

  return (
    <OfferCard
      className={className}
      imageWrapperClassName={imageWrapperClassName}
      {...restProps}
    />
  );
};

export default CityOfferCard;

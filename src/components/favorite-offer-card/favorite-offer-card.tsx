import React from "react";
import OfferCard from "../offer-card/offer-card";
import {Subtract} from "utility-types";

interface InjectingProps {
  className?: string;
  imageWrapperClassName?: string;
}

type P = React.ComponentProps<typeof OfferCard>;
type T = Subtract<P, InjectingProps>;

const FavoriteOfferCard: React.FunctionComponent<T> = (props: T) => {
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

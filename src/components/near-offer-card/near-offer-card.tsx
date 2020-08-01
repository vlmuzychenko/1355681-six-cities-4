import React from "react";
import OfferCard from "../offer-card/offer-card";
import {Subtract} from "utility-types";

interface InjectingProps {
  className?: string;
  imageWrapperClassName?: string;
}

type P = React.ComponentProps<typeof OfferCard>;
type T = Subtract<P, InjectingProps>;

const NearOfferCard: React.FunctionComponent<T> = (props: T) => {
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

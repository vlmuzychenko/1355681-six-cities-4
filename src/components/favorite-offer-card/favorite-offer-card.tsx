import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card";

const FavoriteOfferCard = (props) => {
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

FavoriteOfferCard.propTypes = {
  className: PropTypes.string
};

export default FavoriteOfferCard;

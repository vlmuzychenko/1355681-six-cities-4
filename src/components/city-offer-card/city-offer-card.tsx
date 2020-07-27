import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const CityOfferCard = (props) => {
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

CityOfferCard.propTypes = {
  className: PropTypes.string
};

export default CityOfferCard;

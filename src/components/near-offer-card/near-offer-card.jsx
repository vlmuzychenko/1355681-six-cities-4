import React from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";

const NearOfferCard = (props) => {
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

NearOfferCard.propTypes = {
  className: PropTypes.string
};

export default NearOfferCard;

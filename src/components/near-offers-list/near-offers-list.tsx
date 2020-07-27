import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import {PlaceCardTypes} from "../../const.js";

const NearOffersList = (props) => {
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

NearOffersList.propTypes = {
  className: PropTypes.string
};

export default NearOffersList;

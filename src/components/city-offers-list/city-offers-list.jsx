import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list.jsx";
import {PlaceCardTypes} from "../../const.js";

const CityOffersList = (props) => {
  const className = `cities__places-list tabs__content ${props.className || ``}`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OffersList
      type={PlaceCardTypes.CITY}
      className={className}
      {...restProps}
    />
  );
};

CityOffersList.propTypes = {
  className: PropTypes.string
};

export default CityOffersList;

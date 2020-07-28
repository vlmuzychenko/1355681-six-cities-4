import React from "react";
import PropTypes from "prop-types";
import OffersList from "../offers-list/offers-list";
import {PlaceCardTypes} from "../../const";

const FavoritesOffersList = (props) => {
  const className = `favorites__list ${props.className || ``}`;

  const restProps = Object.assign({}, props);
  delete restProps.className;

  return (
    <OffersList
      type={PlaceCardTypes.FAVORITE}
      className={className}
      {...restProps}
    />
  );
};

FavoritesOffersList.propTypes = {
  className: PropTypes.string
};

export default FavoritesOffersList;

import React from "react";
import PropTypes from "prop-types";

const City = (props) => {
  const {city, isActive, onCityNameClick} = props;
  return (
    <li className="locations__item">
      <a className={`locations__item-link tabs__item ${isActive && `tabs__item--active`}`}
        href="#"
        onClick={() => {
          if (!isActive) {
            onCityNameClick(city);
          }
        }}>
        <span>{city.name}</span>
      </a>
    </li>
  );
};

City.propTypes = {
  city: PropTypes.shape({
    name: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number).isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

export default City;

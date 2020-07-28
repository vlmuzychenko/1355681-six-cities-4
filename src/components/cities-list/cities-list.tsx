import React from "react";
import PropTypes from "prop-types";
import City from "../city/city";

const CitiesList = React.memo(function CitiesList(props) {
  const {cities, currentCity, onCityNameClick} = props;

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((city, index) => {
          return (
            <City
              key={city.name + index}
              city={city}
              isActive={city.name === currentCity.name ? true : false}
              onCityNameClick={onCityNameClick}
            />
          );
        })}
      </ul>
    </section>
  );
});

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired,
      }).isRequired
  ).isRequired,
  currentCity: PropTypes.shape({
    name: PropTypes.string,
    coords: PropTypes.arrayOf(PropTypes.number),
    zoom: PropTypes.number,
  }).isRequired,
  onCityNameClick: PropTypes.func.isRequired,
};

export default CitiesList;

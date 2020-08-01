import React from "react";
import City from "../city/city";
import {CityInterface} from "../../types";

interface Props {
  cities: CityInterface[];
  currentCity: CityInterface;
  onCityNameClick: () => void;
}

const CitiesList: React.FunctionComponent<Props> = (props: Props) => {
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
};

export default React.memo(CitiesList);

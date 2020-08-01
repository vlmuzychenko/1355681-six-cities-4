import React from "react";
import {CityInterface} from "../../types";

interface Props {
  city: CityInterface;
  isActive: boolean;
  onCityNameClick: (city: object) => void;
}

const City: React.FunctionComponent<Props> = (props: Props) => {
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

export default City;

import React from "react";
import PropTypes from "prop-types";
import {SORTS} from "../../const";


const Sort = (props) => {
  const {onSortTypeClick, activeSortType, onSortDropdownClick, isOpened} = props;

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={onSortDropdownClick}
      >
        {SORTS.find((el) => el.type === activeSortType).text}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
        {SORTS.map((sort, index) => {
          return (
            <li
              key={sort.type + index}
              className={`places__option ${sort.type === activeSortType ? `places__option--active` : ``}`}
              tabIndex="0"
              onClick={() => {
                onSortTypeClick(sort.type);
              }}
            >
              {sort.text}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

Sort.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  isOpened: PropTypes.bool.isRequired,
  onSortTypeClick: PropTypes.func.isRequired,
  onSortDropdownClick: PropTypes.func.isRequired,
};

export default Sort;

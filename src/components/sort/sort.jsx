import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {SORTS} from "../../const.js";

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSortClick = this._handleSortClick.bind(this);

    this.state = {
      isOpened: false
    };
  }

  _handleSortClick() {

  }

  render() {
    const {onSortTypeClick, activeSortType} = this.props;

    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span
          className="places__sorting-type"
          tabIndex="0"
          onClick={() => {
            this.setState({
              isOpened: !this.state.isOpened
            });
          }}
        >
          {SORTS.find((el) => el.type === activeSortType).text}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${this.state.isOpened && `places__options--opened`}`}>
          {SORTS.map((sort, index) => {
            return (
              <li
                key={sort.type + index}
                className={`places__option ${sort.type === activeSortType && `places__option--active`}`}
                tabIndex="0"
                onClick={() => {
                  onSortTypeClick(sort.type);
                  this.setState({
                    isOpened: !this.state.isOpened
                  });
                }}
              >
                {sort.text}
              </li>
            );
          })}
        </ul>
      </form>
    );
  }
}

Sort.propTypes = {
  activeSortType: PropTypes.string.isRequired,
  onSortTypeClick: PropTypes.func.isRequired
};

export default Sort;

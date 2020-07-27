import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withOpenedCondition = (Component) => {
  class WithOpenedCondition extends PureComponent {
    constructor(props) {
      super(props);

      this._handleSortClick = this._handleSortClick.bind(this);

      this.state = {
        isOpened: false
      };
    }

    _handleSortClick() {
      this.setState({
        isOpened: !this.state.isOpened
      });
    }

    render() {
      const {onSortTypeClick} = this.props;

      return (
        <Component
          {...this.props}
          onSortDropdownClick={this._handleSortClick}
          onSortTypeClick={(sortType) => {
            onSortTypeClick(sortType);
            this._handleSortClick();
          }}
          isOpened={this.state.isOpened}
        />
      );
    }
  }

  WithOpenedCondition.propTypes = {
    activeSortType: PropTypes.string.isRequired,
    onSortTypeClick: PropTypes.func.isRequired
  };

  return WithOpenedCondition;
};

export default withOpenedCondition;

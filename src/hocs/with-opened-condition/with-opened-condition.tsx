import React, {PureComponent} from "react";
import {Subtract} from "utility-types";

interface InjectingProps {
  isOpened: boolean;
  onSortDropdownClick: () => void;
  onSortTypeClick: () => void;
}

interface State {
  isOpened: boolean;
}

const withOpenedCondition = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithOpenedCondition extends PureComponent<T, State> {
    constructor(props: T) {
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

  return WithOpenedCondition;
};

export default withOpenedCondition;

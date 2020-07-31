import React, {PureComponent} from "react";

interface Props {
  activeSortType: string;
  onSortTypeClick: (sortType: string) => void;
}

interface State {
  isOpened: boolean;
}

const withOpenedCondition = (Component) => {
  class WithOpenedCondition extends PureComponent<Props, State> {
    constructor(props: Props) {
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

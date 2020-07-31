import React, {PureComponent} from "react";
import {Subtract} from "utility-types";

interface InjectingProps {
  offerId: number;
  comment: string;
  rating: string;
  formDisabled: boolean;
  buttonDisabled: boolean;
  showError: boolean;
  handleCommentChange: (value: string) => void;
  handleRatingChange: (value: string) => void;
  onSubmit: (offerId: number, offerData: object, callback: (status: boolean) => void) => void;
}

interface State {
  comment: string;
  rating: string;
  formDisabled: boolean;
  buttonDisabled: boolean;
  showError: boolean;
}

const ValidCommentLength = {
  MIN_LENGTH: 50,
  MAX_LENGTH: 300,
};

const withHandleForm = (Component) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectingProps>;

  class WithHandleForm extends PureComponent<T, State> {
    constructor(props: T) {
      super(props);

      this._handleCommentChange = this._handleCommentChange.bind(this);
      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleFormReset = this._handleFormReset.bind(this);
      this._handleReviewFormSubmit = this._handleReviewFormSubmit.bind(this);

      this.state = {
        comment: ``,
        rating: ``,
        formDisabled: false,
        buttonDisabled: true,
        showError: false,
      };
    }

    _handleCommentChange(evt) {
      this.setState({
        comment: evt.target.value
      });
      this._isFormValid();
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value
      });
      this._isFormValid();
    }

    _isFormValid() {
      if (this.state.comment.length > ValidCommentLength.MIN_LENGTH
          && this.state.comment.length < ValidCommentLength.MAX_LENGTH
          && this.state.rating) {
        return this.setState({
          buttonDisabled: false,
        });
      } else {
        return this.setState({
          buttonDisabled: true,
        });
      }
    }

    _handleFormReset(status = true) {
      if (status) {
        this.setState({
          comment: ``,
          rating: ``,
          formDisabled: false,
          buttonDisabled: true,
          showError: false,
        });
      } else {
        this.setState({
          formDisabled: false,
          showError: true,
        });
      }
    }

    _handleReviewFormSubmit(evt) {
      const {offerId, onSubmit} = this.props;
      evt.preventDefault();

      this.setState({
        formDisabled: true,
      });

      onSubmit(offerId, {
        comment: this.state.comment,
        rating: this.state.rating,
      }, this._handleFormReset);
    }

    render() {
      return (
        <Component
          {...this.props}
          comment={this.state.comment}
          rating={this.state.rating}
          formDisabled={this.state.formDisabled}
          buttonDisabled={this.state.buttonDisabled}
          showError={this.state.showError}
          handleCommentChange={this._handleCommentChange}
          handleRatingChange={this._handleRatingChange}
          handleReviewFormSubmit={this._handleReviewFormSubmit}
        />
      );
    }
  }
  return WithHandleForm;
};

export default withHandleForm;

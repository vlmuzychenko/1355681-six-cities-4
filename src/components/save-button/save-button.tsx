import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {Operation as DataOperation} from "../../reducer/data/data.js";

const SaveButton = (props) => {
  const {className, iconClassName, width, height, offerId, authorizationStatus, onSaveButtonClick, isFavorite} = props;

  const classNameFinal = className ? className : `place-card__bookmark-button`;
  const iconClassNameFinal = iconClassName ? iconClassName : `place-card__bookmark-icon`;
  const activeClassName = `${classNameFinal}--active`;

  return (
    authorizationStatus === AuthorizationStatus.NO_AUTH ?
      <Link to={AppRoute.LOGIN}
        className={`${classNameFinal} ${isFavorite ? activeClassName : `` } button`}
        type="button">
        <svg className={iconClassNameFinal}
          width={width ? width : `18`}
          height={height ? height : `19`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
      </Link> :

      <button className={`${classNameFinal} ${isFavorite && activeClassName } button`}
        type="button"
        onClick={() => {
          onSaveButtonClick(offerId, !isFavorite);
        }}>
        <svg className={iconClassNameFinal}
          width={width ? width : `18`}
          height={height ? height : `19`}>
          <use xlinkHref="#icon-bookmark"></use>
        </svg>
        <span className="visually-hidden">{isFavorite ? `In` : `To`} bookmarks</span>
      </button>
  );
};

SaveButton.propTypes = {
  offerId: PropTypes.number.isRequired,
  className: PropTypes.string,
  iconClassName: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  isFavorite: PropTypes.bool.isRequired,
  authorizationStatus: PropTypes.string.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSaveButtonClick(offerId, isFavorite) {
    dispatch(DataOperation.sendFavorite(offerId, isFavorite));
  }
});

export {SaveButton};
export default connect(null, mapDispatchToProps)(SaveButton);

import React from "react";
import PropTypes from "prop-types";
import {AuthorizationStatus} from "../../reducer/user/user.js";

const Header = (props) => {
  const {authorizationStatus, authorizationInfo} = props;

  const userData = authorizationStatus === AuthorizationStatus.AUTH && authorizationInfo ? <span className="header__user-name user__name">{authorizationInfo.email}</span> : <span className="header__login">Sign in</span>;
  const userAvatar = authorizationStatus === AuthorizationStatus.AUTH && authorizationInfo ? <img src={`https://htmlacademy-react-3.appspot.com/six-cities${authorizationInfo.avatarUrl}`} alt="User avatar"/> : null;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {userAvatar}
                  </div>
                  {userData}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  authorizationInfo: PropTypes.shape({
    avatarUrl: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    isPro: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default Header;

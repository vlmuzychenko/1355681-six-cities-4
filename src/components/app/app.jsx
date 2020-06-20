import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const headingClickHandler = () => {};

const App = (props) => {
  const {offersCount, offers} = props;

  return (
    <Main
      offersCount={offersCount}
      offers={offers}
      onHeadingClick={headingClickHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photo: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
      })
  )
};

export default App;

import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const headingClickHandler = () => {};

const App = (props) => {
  const {offersCount, offersTitles} = props;

  return (
    <Main
      offersCount={offersCount}
      offersTitles={offersTitles}
      onHeadingClick={headingClickHandler}
    />
  );
};

App.propTypes = {
  offersCount: PropTypes.number.isRequired,
  offersTitles: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default App;

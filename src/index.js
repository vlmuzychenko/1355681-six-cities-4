import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const Settings = {
  OFFERS_COUNT: 1234,
  OFFERS_TITLES: [`Beautiful & luxurious apartment at great location`, `Wood and stone place`]
};

ReactDOM.render(
    <App
      offersCount={Settings.OFFERS_COUNT}
      offersTitles={Settings.OFFERS_TITLES}
    />,
    document.querySelector(`#root`)
);

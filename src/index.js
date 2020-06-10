import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const OFFERS_COUNT = 1234;

ReactDOM.render(
    <App
      offersCount={OFFERS_COUNT}
    />,
    document.querySelector(`#root`)
);

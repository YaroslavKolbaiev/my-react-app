import ReactDOM from "react-dom/client";
import "./App.scss";
import { App } from "./App";
import { HashRouter } from "react-router-dom";
import "bulma/css/bulma.css";
import store from "./store/srore";
import { Provider } from "react-redux";
import React from "react";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import reducers from "./reducers/index";

import { Provider } from "react-redux";
// function that contains all the state data
import { createStore } from "redux";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

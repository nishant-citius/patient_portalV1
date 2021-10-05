import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import appStore from "./redux/appStore";

/** redux code imports */
// import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
// import { applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import { UsersReducer } from "./redux/reducers/userReducer";
/** redux  imports */

/** combine reducers*/
// let rootReducer = combineReducers({
//   users: UsersReducer,
// });

// /**create store  */

// let appStore = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={appStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

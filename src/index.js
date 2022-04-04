import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App";
import { store } from "./redux/configureStore";

import Header from "./components/Header/Header";
import SignUp from "./pages/SignUpPage/SignUp";
import SignIn from "./pages/SignIn/SignIn";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <SignUp />
      <SignIn />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


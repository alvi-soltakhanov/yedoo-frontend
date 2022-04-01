import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
// import App from "./components/App";
import { store } from "./redux/configureStore";
import MainPage from "./pages/MainPage/MainPage";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainPage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

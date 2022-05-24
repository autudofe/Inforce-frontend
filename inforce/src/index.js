import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { combineReducers, createStore } from "redux";
import { productReducer } from "./reducers/productReducer";
import { Provider } from "react-redux";
import { modalReducer } from "./reducers/modalReducer";

const reducers = combineReducers({
  products: productReducer,
  modals: modalReducer,
});

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

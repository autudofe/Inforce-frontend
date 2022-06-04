import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {combineReducers, createStore} from "redux";
import {productReducer} from "./reducers/productReducer";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {commentsReducer} from "./reducers/commentsReducer";

const reducers = combineReducers({
    products: productReducer,
    comments: commentsReducer,
});

const store = createStore(reducers);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
    </Provider>
);

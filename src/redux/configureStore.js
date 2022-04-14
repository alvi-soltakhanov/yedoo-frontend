import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { application } from "./features/application";
import food from "./features/food";
import cafe from "./features/cafe";
import cart from "./features/cart";
import categories from "./features/categories";
import client from "./features/client";
import courier from "./features/courier";
import order from "./features/order";

export const store = createStore(
  combineReducers({
    application,
    food,
    cafe,
    cart,
    categories,
    client,
    courier,
    order,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

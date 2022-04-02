import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import application from "./features/application";
import cart from './features/cart'


export const store = createStore(
    combineReducers({
        application,
        cart
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
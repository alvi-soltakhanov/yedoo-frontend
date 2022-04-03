import { applyMiddleware, createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { application } from "./features/application";
import food from "./features/food";
import cafe from "./features/cafe";


export const store = createStore(
    combineReducers({
        application,
        food,
        cafe
    }),
    composeWithDevTools(applyMiddleware(thunk))
)
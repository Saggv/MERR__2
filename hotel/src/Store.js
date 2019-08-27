import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import roofReducer from "./Reducers/index";

const initialState={};
const middleware = [thunk];

const store = createStore(
    roofReducer,
    initialState,
    compose(
         applyMiddleware(...middleware)
    )
);

export default store;


import {combineReducers} from "redux";
import userReducer from "./User";
import allRooms from "./Rooms";

export default combineReducers({
       dataUser:userReducer,
       allRooms:allRooms
})
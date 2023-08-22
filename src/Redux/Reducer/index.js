import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const allReducer = combineReducers({ counterReducer, authReducer });

export default allReducer;

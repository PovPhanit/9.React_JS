import { combineReducers, createStore } from "redux";
import accountReducer from "./accoutSlice"
import userReducer from "./userSlice";
const store =combineReducers({
    user:userReducer,
    account:accountReducer,
})
const rootReducer=createStore(store);
export default rootReducer;
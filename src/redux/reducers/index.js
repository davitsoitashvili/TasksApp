import  {combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootDeducer = combineReducers({
    appTasks : taskReducer
});

export default rootDeducer;
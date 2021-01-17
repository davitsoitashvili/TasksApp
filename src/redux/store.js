import {createStore, compose, applyMiddleware } from "redux"
import reduxThunk from "redux-thunk"
import rootDeducer from "./reducers";

const middlewares = [reduxThunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootStore = createStore(rootDeducer, composeEnhancers(applyMiddleware(...middlewares)))

export default rootStore;
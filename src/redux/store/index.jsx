import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import authReducers from "../reducers/authReducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(authReducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import authReducers from "../reducers/authReducers";

// let store = createStore(authReducers, applyMiddleware(thunk));

// export default store;

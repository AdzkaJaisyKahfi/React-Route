import { createStore } from "redux";
import authReducers from "../reducers/authReducers";

let store = createStore(
  authReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;

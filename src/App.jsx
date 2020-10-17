import React from "react";
import "./styles.css";
import Navbar from "./Page/Navbar";
import Home from "./Page/Home";
import Contact from "./Page/Contact";
import About from "./Page/About";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import DetailUser from "./Page/DetailUser";
import ProtectedRoute from "./Component/ProtectedRoute";
import ProtectedLogin from "./Component/ProtectedLogin";
import Login from "./Page/Login";
import Register from "./Page/Register";
import NotFound from "./Page/NotFound";
import Corona from "./Page/Corona";
import store from "./redux/store";
import { Provider } from "react-redux";
// import { createStore } from "redux";
// import reducer, { initialState } from "./React-Context/Reducer";
// import { StateProvider } from "./React-Context/StateProvider";

//Reducer adalah suatu fungsi yang bisa mengupdate store, reducer menerima dua parameter yaitu state dan action
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 100;
//     case "DECREMENT":
//       return state - 1;
//   }
// };

//Store, store ini adalah tempat untuk menyimpan state yang akan diakses oleh komponen
// let store = createStore(counterReducer);

//Dispatch merupakan actions yang dipacu oleh user
// const increment = () => {
//   return { type: "INCREMENT" };
// };
// const decrement = () => {
//   return { type: "DECREMENT" };
// };

// store.dispatch(increment());

//View/Subscription yaitu state yang ditampilkan oleh komponen
// store.subscribe(() => {
//   console.log("nilai state", store.getState());
// });
// console.log("state saat ini", store.getState());

export default function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <HashRouter>
          <Switch>
            <ProtectedRoute exact path="/">
              <Navbar>
                <Home />
              </Navbar>
            </ProtectedRoute>
            <Route path="/about">
              <Navbar>
                <About />
              </Navbar>
            </Route>
            <Route path="/contact">
              <Navbar>
                <Contact />
              </Navbar>
            </Route>
            <Route path="/corona">
              <Navbar>
                <Corona />
              </Navbar>
            </Route>
            <ProtectedRoute path="/DetailUser/:id" component={DetailUser} />
            <ProtectedLogin path="/login">
              <Navbar>
                <Login />
              </Navbar>
            </ProtectedLogin>
            <ProtectedLogin path="/register" component={Register} />
            <Route>
              <Navbar>
                <NotFound />
              </Navbar>
            </Route>
          </Switch>
        </HashRouter>
      </Provider>
    </div>
  );
}

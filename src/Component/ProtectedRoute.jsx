import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(false);
  const login = useSelector((state) => state.auth);

  console.log(auth);
  React.useMemo(() => {
    setAuth(login);
    // if (localStorage.getItem("token")) {
    //   setAuth(true);
    // }
  }, [auth]);

  return (
    <div>
      <Route {...rest}>{auth ? children : <Redirect to="/login" />}</Route>
    </div>
  );
};

export default ProtectedRoute;

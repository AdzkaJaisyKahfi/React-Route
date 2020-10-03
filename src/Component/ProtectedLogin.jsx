import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedLogin = ({ children, ...rest }) => {
  const [auth, setAuth] = React.useState(true);
  React.useMemo(() => {
    if (localStorage.getItem("token")) {
      setAuth(false);
    }
  }, [auth]);

  return (
    <div>
      <Route {...rest}>{auth ? children : <Redirect to="/" />}</Route>
    </div>
  );
};

export default ProtectedLogin;

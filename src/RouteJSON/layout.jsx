import React from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import dashboardRoutes from "./routes";

const Layout = () => {
  const Navbar = dashboardRoutes.map((link, key) => {
    const { layout, path, name } = link;
    return (
      <ul class="list-group mt-2">
        <li class="list-group-item">
          <NavLink
            style={{
              textDecoration: "none",
              color: "black"
            }}
            activeStyle={{
              fontWeight: "bold"
            }}
            to={layout + path}
            key={key}
          >
            {name}
          </NavLink>
        </li>
      </ul>
    );
  });
  const Content = (
    <Switch>
      {dashboardRoutes.map((routes, key) => {
        const { path, Component, layout, props } = routes;
        if (layout === "/admin") {
          return (
            <Route path={layout + path} key={key}>
              <Component />
            </Route>
          );
          return null;
        }
      })}
      <Redirect from="/admin" to="/admin/home" />
    </Switch>
  );
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row bg-primary">JSON Config</div>
        <div className="row">
          <div className="col-3 bg-light vh-100">{Navbar}</div>
          <div className="col-9">{Content}</div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;

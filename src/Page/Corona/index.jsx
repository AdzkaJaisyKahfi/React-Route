import React from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import GoBack from "../HOC/goBack";

const Corona = () => {
  let Match = useRouteMatch();

  console.log(Match);

  return (
    <React.Fragment>
      <h3 className="mt-3">Belajar Nested Route</h3>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to={`${Match.url}/corona/positif`}
      >
        Data Positif
      </NavLink>{" "}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to={`${Match.url}/corona/sembuh`}
      >
        Data Sembuh
      </NavLink>{" "}
      <NavLink
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to={`${Match.url}/corona/meninggal`}
      >
        Data Meninggal
      </NavLink>{" "}
      <Switch>
        <Route path={`${Match.url}/corona/positif`}>
          <h2>Data Positif</h2>
        </Route>
        <Route path={`${Match.url}/corona/sembuh`}>
          <h2>Data Sembuh</h2>
        </Route>
        <Route path={`${Match.url}/corona/meninggal`}>
          <h2>Data Meninggal</h2>
        </Route>
      </Switch>
      <GoBack />
    </React.Fragment>
  );
};

export default Corona;

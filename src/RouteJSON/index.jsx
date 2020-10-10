import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Layout from "./layout";
import Login from "../Page/Login";
import ProtectedRoute from "../Component/ProtectedRoute";

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <ProtectedRoute path="/admin" component={Layout} />
        <Route path="/login" component={Login} />
        <Redirect from="/" to="/admin/home" />
      </Switch>
    </BrowserRouter>
  );
};

export default Index;

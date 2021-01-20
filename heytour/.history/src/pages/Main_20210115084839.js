import React from "react";
import { Route } from "react-router-dom";
import Login from "../authentication/Login";

function Main() {
  return <Route path="" exact component={Login} />;
}

export default Main;

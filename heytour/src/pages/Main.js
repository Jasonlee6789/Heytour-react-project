import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "../authentication/Login";

function Main() {
  return (
    <Router>
      <Route path="/" exact component={Login} />
    </Router>
  );
}

export default Main;

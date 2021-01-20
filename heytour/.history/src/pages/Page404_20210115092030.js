import React from "react";
import { Route } from "react-router-dom";

function Page404(props) {
  console.log(props);
  return <Route path="" component={Page404} />;
}

export default Page404;

import React from "react";
import { Route } from "react-router-dom";

function Page404(props) {
  console.log(props);
  return (
    <div>
      页面飞走了
      <Route path="" component={Page404} />
    </div>
  );
}

export default Page404;

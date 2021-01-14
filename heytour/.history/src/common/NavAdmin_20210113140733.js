import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddJob from "../job-list/AddJob";
import JobAdmin from "../job-list/JobAdmin";

export default function NavAdmin() {
  function toJobAdmin() {
    <Router>
      <Route path="/admin/" exact component={JobAdmin} />;
    </Router>;
  }
  return (
    <div>
      <Router>
        <AddJob />
        {/* <Link to="/addjob">
          <Button
            primary
            content="Post "
            icon="add"
            onClick={() => {
              <AddJob />;

              console.log("点击了添加新工作");
            }}
          />
        </Link> */}
        <Link to="/admin/">
          <Button
            //onClick={() => props.putJob(props.job.id)}
            //icon="edit"
            //floated="left"
            content="管理发布的工作"
            primary
            onClick={() => {
              console.log("点击了管理发布的工作");
            }}
          />
          <Route path="/admin/" exact component={JobAdmin} />;
        </Link>
      </Router>
    </div>
  );
}

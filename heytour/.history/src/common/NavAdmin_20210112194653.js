import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddJob from "../job-list/AddJob";
import JobDetail from "../job-list/JobDetail";

export default function NavAdmin() {
  function toJob() {
    <Router>
      <Route path="/editjob/" exact component={JobDetail} />;
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
        <Link to="/editjob/">
          <Button
            //onClick={() => props.putJob(props.job.id)}
            //icon="edit"
            //floated="left"
            content="Edit"
            primary
            onClick={() => {
              toJob();
              console.log("点击了更改工作");
            }}
          />
        </Link>
      </Router>
    </div>
  );
}

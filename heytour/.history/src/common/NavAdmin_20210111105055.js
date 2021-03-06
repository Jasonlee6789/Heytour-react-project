import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddJob from "../job-list/AddJob";

export default function NavAdmin() {
  function toAddJob() {
    <Router>
      <Route path="/addjob" exact component={AddJob} />
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
        <Button
          //onClick={() => props.putJob(props.job.id)}
          icon="edit"
          //floated="left"
          content="Edit"
          primary
          onClick={() => {
            console.log("点击了更改工作");
          }}
        />
      </Router>
    </div>
  );
}

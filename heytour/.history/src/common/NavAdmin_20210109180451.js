import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobDetail from "../job-list/JobDetail";
export default function NavAdmin() {
  return (
    <div>
      <Router>
        <Button
          primary
          content="Post New Job"
          icon="add"
          labelPosition="left"
          onClick={() => {
            console.log("点击了添加新工作");
          }}
        />
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

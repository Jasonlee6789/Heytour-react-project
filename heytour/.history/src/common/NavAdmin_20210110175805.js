import React from "react";
import { Button } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddJob from "../job-list/AddJob";
export default function NavAdmin() {
  return (
    <div>
      <Router>
        <Button
          primary
          content="Post "
          icon="add"
          onClick={() => {
            console.log("点击了添加新工作");
            <Route path="/index/" exact compoment={AddJob} />;
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

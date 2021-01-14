import React, { useEffect } from "react";
import { Input, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobList from "../job-list/JobList";

const SelectForm = () => {
  // useEffect(() => {
  //   let tempId = this.props.match.params.id;
  // });

  return (
    <div>
      <Segment basic textAlign="right">
        <Input
          action={{ color: "blue", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Enter ID to search "
          // onChange={this.handleChange}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              console.log("执行搜索工作的方法");
            }
          }}
        />
      </Segment>
      <Router>
        <Route path="/jobs/:id" component={JobList} />
      </Router>
    </div>
  );
};

export default SelectForm;

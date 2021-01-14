import React from "react";
import { Input, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const SelectForm = () => {
  // useEffect(() => {

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
        />
      </Segment>
      <Router>
        <Route path="/jobs/:id" component={} />
      </Router>
    </div>
  );
};

export default SelectForm;

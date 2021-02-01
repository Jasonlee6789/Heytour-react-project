import React, { useState, useEffect } from "react";
import { Input, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobList from "../job-list/JobList";
import axios from "axios";
import servicePath from "../config/apiUrl";

const SelectForm = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const fetchList = async (query) => {
    try {
      const data = await axios.get(query);
      data && setData(data);
    } catch (error) {
      throw error;
    }
    //query 当做参数传进去，把data和query 联动起来这样就可以达到搜索的功能啦。
  };

  return (
    <div>
      <Segment basic textAlign="right">
        <Input
          action={{ color: "blue", content: "Search" }}
          icon="search"
          iconPosition="left"
          placeholder="Enter Title to search "
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              console.log("执行搜索工作的方法");
              fetchList(query);
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

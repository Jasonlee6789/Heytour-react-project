import React, { useState, useEffect } from "react";
import { Input, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobList from "../job-list/JobList";

function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchList = async (query = "") => {
      try {
        const data = await fetchList(query);
        data && setData(data);
      } catch (err) {
        throw err;
      }
      fetchList(query);
      //query 当做参数传进去，把data和query 联动起来这样就可以达到搜索的功能啦。
    };
  }, []);
}

const SelectForm = () => {
  // useEffect(() => {
  //Todo:怎么定义一个方法，输入内容 摁回车 会去搜索 并显示在列表页上？
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
          // onChange={(e)=>{e.target.value}}
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

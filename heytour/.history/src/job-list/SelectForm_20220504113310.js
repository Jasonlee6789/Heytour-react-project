import {
  Button,
  Grid,
  Header,
  Input,
  Label,
  Search,
  Segment,
} from "semantic-ui-react";
import React, { useEffect } from "react";

import axios from "axios";
import { useJobList } from "./JobListAPI";

// import { useLocation } from "react-router-dom";

// export default SelectForm;
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split("").some((word) => word.toLowerCase().startsWith(query))
  );
}
const SelectForm = (props) => {
  //const url = "https://localhost:5001/api/jobs";

  // const fetchList = async (query) => {
  //   try {
  //     const response = await axios.get(
  //       `https://localhost:5001/api/jobs?title=${query}`
  //     );
  //     console.log("111", response);
  //   } catch (error) {
  //     throw error;
  //   }
  // };

  return (
    <div>
      {
        <Segment basic textAlign="left">
          <Input
            type="text"
            placeholder="Enter Job Title to search "
            // action={{ color: "blue", content: "Search" }}
            // icon="search"
            // iconPosition="left"
            value={props.handleSearch.filterText}
            onChange={(e) => {
              props.handleSearch(e.target.value);
              console.log(e.target.value);
              // const Title = fetchList("Marketing");
              // console.log(Title);
            }}
            // onPressEnter={(e) => {
            //   props.handleSearch(e.target.value);
            // }}
            // onKeyDown={(e) => {
            //   if (e.keyCode === 13) {
            //     console.log("执行搜索工作的方法");
            //   }
            // }}
          />
        </Segment>
      }
    </div>
  );
};

export default SelectForm;

import { Button, Form, Input, Segment } from "semantic-ui-react";
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useJobList } from "./JobListAPI";

// import { useLocation } from "react-router-dom";
// export default SelectForm;
export function filterItems(items, query) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split("").some((title) => title.toLowerCase().startsWith(query))
  );
}

const SelectForm = (props) => {
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const [url, setUrl] = useState("servicePath.getJobs/search?query=");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsError(false);
  //     setIsLoading(true);
  //     try {
  //       const result = await axios(url);
  //       setData(result.data);
  //     } catch (error) {
  //       setIsError(true);
  //     }
  //     setIsLoading(false);
  //   };
  //   fetchData();
  // }, [url]);

  const FetchData = async () => {
    try {
      const data = await axios(url);
      if (data) {
        setData(data);
      }
    } catch (error) {}
  };
  return (
    <Segment basic textAlign="left">
      <Form
        onSubmit={(e) => {
          setUrl(`servicePath.getJobs/search?query=${query}`);
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          placeholder="Enter Job Title to search "
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            console.log(e.target.value);
          }}
        />
        <Button type="button">Search</Button>
      </Form>
    </Segment>
  );
};

export default SelectForm;

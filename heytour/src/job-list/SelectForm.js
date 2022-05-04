import {
  Button,
  Grid,
  Header,
  Input,
  Label,
  Search,
  Segment,
} from "semantic-ui-react";
import React, { useEffect, useState } from "react";

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
  const [data, setData] = useState();
  const [query, setQuery] = useState("lijing");
  const [url, setUrl] = useState(
    "https://localhost:5001/api/jobs/search?query=lijing"
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios(url);
        setData(result.data);
      }
      catch(error){
        setIsError(true);
      }
      setIsLoading(false);
    };

    fetchData();
  }, [url]);
  return (
    <Segment basic textAlign="left">
      <Input
        type="text"
        placeholder="Enter Job Title to search "
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          console.log(e.target.value);
        }}
      />
      <Button
        type="button"
        onClick={() => {
          setUrl(`https://localhost:5001/api/jobs/search?query=${query}`);
        }}
      >
        Search
      </Button>
    </Segment>
  );
};

export default SelectForm;

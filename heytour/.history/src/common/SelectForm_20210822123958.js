import React, { useState, useEffect } from "react";
import { Search, Grid, Header, Segment, Label } from "semantic-ui-react";
// import { useLocation } from "react-router-dom";
import { useJobList } from "../job-list/JobListAPI";
import axios from "axios";
import servicePath from "../config/apiUrl";
import _ from "lodash";
import faker from "faker";

const source = {
  title: "Teacher Aide",
  description: "1",
  image: "2",
  price: "3",
};
//   _.times(5, () => ({
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, "$"),
// }));

const initialState = {
  loading: false,
  results: [],
  value: "",
};

function exampleReducer(state, action) {
  switch (action.type) {
    case "CLEAN_QUERY":
      return initialState;
    case "START_SEARCH":
      return { ...state, loading: true, value: action.query };
    case "FINISH_SEARCH":
      return { ...state, loading: false, results: action.results };
    case "UPDATE_SELECTION":
      return { ...state, value: action.selection };

    default:
      throw new Error();
  }
}

const resultRenderer = ({ title }) => <Label content={title} />;

function SelectForm() {
  const [jobListResponse, setJobListFilter] = useJobList(null);

  const [state, dispatch] = React.useReducer(exampleReducer, initialState);
  const { loading, results, value } = state;

  const timeoutRef = React.useRef();
  const handleSearchChange = React.useCallback((e, data) => {
    clearTimeout(timeoutRef.current);
    dispatch({ type: "START_SEARCH", query: data.value });

    timeoutRef.current = setTimeout(() => {
      if (data.value.length === 0) {
        dispatch({ type: "CLEAN_QUERY" });
        return;
      }

      const re = new RegExp(_.escapeRegExp(data.value), "i");
      const isMatch = (result) => re.test(result.title);

      dispatch({
        type: "FINISH_SEARCH",
        results: _.filter(source, isMatch),
      });
    }, 300);
  }, []);
  React.useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Grid>
      <Grid.Column width={6}>
        <Search
          loading={loading}
          onResultSelect={(e, data) =>
            dispatch({ type: "UPDATE_SELECTION", selection: data.result.title })
          }
          onSearchChange={handleSearchChange}
          resultRenderer={resultRenderer}
          results={results}
          value={value}
        />
      </Grid.Column>
      {/* <Grid.Column width={10}>
        <Segment>
          <Header>State</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify({ loading, results, value }, null, 2)}
          </pre>
          <Header>Options</Header>
          <pre style={{ overflowX: "auto" }}>
            {JSON.stringify(source, null, 2)}
          </pre>
        </Segment>
      </Grid.Column> */}
    </Grid>
  );
}
export default SelectForm;

// const SelectForm = () => {
//   const [text, setText] = useState([]);

//   const location = useLocation();
const url = servicePath.getJobs;
//   const fetchList = async (query) => {
//     try {
//       const response = await axios.get(`url ${query}`);
//       text && setText(text);
//     } catch (error) {
//       throw error;
//     }
//     //query 当做参数传进去，把data和query 联动起来这样就可以达到搜索的功能啦。
//   };

//   return (
//     <div>
//       {location.pathname === "/" && (
//         <Segment basic textAlign="right">
//           <Input
//             action={{ color: "blue", content: "Search" }}
//             icon="search"
//             iconPosition="left"
//             placeholder="Enter Title to search "
//             value={text}
//             onChange={(e) => {
//               setText(e.target.value);
//               console.log(e.target.value);
//               // const Title = fetchList("Marketing");
//               // console.log(Title);
//             }}
//             onKeyDown={(e) => {
//               if (e.keyCode === 13) {
//                 console.log("执行搜索工作的方法");
//               }
//             }}
//           />
//           <Button type="submit" onClick={fetchList("Teacher")}></Button>
//         </Segment>
//       )}
//     </div>
//   );
// };

// export default SelectForm;

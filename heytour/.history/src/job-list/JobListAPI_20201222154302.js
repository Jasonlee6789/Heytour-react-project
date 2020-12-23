import { useState, useEffect, useReducer, useRef } from "react";
// import JobData from "./data.json";
import axios from "axios";

function jobAPIReducer(state, action) {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        isLoading: false,
        ieError: true,
      };

    default:
      throw new Error();
  }
}

export function useJobList(initialFilter) {
  const didMountRef = useRef(true);
  //修改ref的值不会重新render,在组件更新时触发设置成true
  //达成在第一次渲染时，会不会render这个地方
  // const data = JobData;
  const [filter, setFilter] = useState(null);
  //时间排序 比如找出最近一周的工作。
  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    // function sleep(ms) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    async function getJobs() {
      dispatch({ type: "FETCH_INIT" });
      // const headers = {
      //   "Content-Type": "application/json",
      // };
      const url = "https://localhost:44351/api/jobs";
      // await sleep(600);
      // dispatch({ type: "FETCH_SUCCESS", payload: data });
      try {
        const response = await axios.get(url);
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    }
    if (didMountRef.current) {
      getJobs();
    }

    function onDeleteJob() {
      const confirmed = window.confirm(
        `Are U sure to delete this ID num.${key} job?`
      );
    }
  }, [filter]);

  return [state, setFilter];
}

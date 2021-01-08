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
  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  const didMountRef = useRef(true);
  //修改ref的值不会重新render,在组件更新时触发设置成true
  //达成在第一次渲染时，会不会render这个地方

  // const data = JobData;

  const [filter, setFilter] = useState(null);
  //时间排序 比如找出最近一周的工作。

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

    // async function onDeleteJob(id) {
    //   const confirmed = window.confirm("Are you sure to delete this job?");
    //   if (confirmed) {
    //     const url = "https://localhost:44351/api/jobs/" + id;
    //     const response = await axios
    //       .delete(url)
    //       .then((res) => {
    //         console.log("删除成功" + res);
    //         return res.data;
    //       })
    //       .then((error) => {
    //         this.setState({
    //           isLoading: true,
    //           error,
    //         });
    //       });
    //   }
    // }
  }, [filter]);

  return [state, setFilter];
}

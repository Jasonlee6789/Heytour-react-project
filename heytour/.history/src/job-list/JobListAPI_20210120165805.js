import { useState, useEffect, useReducer, useRef } from "react";
// import JobData from "./data.json";
import axios from "axios";
import servicePath from "../config/apiUrl";

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
  //const url = "https://localhost:44351/api/jobs";
  const url = servicePath.getJobs;
  const didMountRef = useRef(true);
  //useRef修改ref的值不会重新render,在组件更新时触发设置成true
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

      //await sleep(600);
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
  }, [filter]);
  return [state, setFilter];
}

export function useJobDelete() {
  const didMountRef = useRef(false);
  //useRef可以保存组件更新前的一些状态
  //组件更新时，ref.current中保存的值不会自动更新，需要我们手动更新
  //const url = "https://localhost:44351/api/jobs/";
  const url = servicePath.getJobs;
  const [id, setId] = useState(null);

  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const deleteJob = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.delete(url + id);
        console.log("call了删除后的：" + response);
        dispatch({ type: "FETCH_SUCCESS", payload: id });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    if (didMountRef.current && id) {
      deleteJob();
    } else {
      didMountRef.current = true;
    }
  }, [id]);

  return [state, setId];
}

export function useJobSave() {
  const didMountRef = useRef(false);
  //useRef修改ref的值不会重新render,在组件更新时触发设置成false
  //useRef可以保存组件更新前的一些状态
  //组件更新时，ref.current中保存的值不会自动更新，需要我们手动更新
  const url = servicePath.getJobs;
  const [job, setJob] = useState(null);

  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const putjob = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.put(url + job.id, job);
        console.log(response);
      } catch (error) {}
    };
  });
}

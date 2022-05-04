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
        isError: true,
      };

    default:
      throw new Error();
  }
}
//查-------------------拿全部后台数据或者查着拿数据
export function useJobList(initialFilter) {
  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });
  //const url = "https://localhost:5001/api/jobs";
  const url = servicePath.getJobs;
  const didMountRef = useRef(true);
  //useRef修改ref的值不会重新render,在组件更新时触发设置成true
  //达成在第一次渲染时，会不会render这个地方。仅仅是在路径中起到缓存数据的作用
  // const data = JobData;
  const [filter, setFilter] = useState(null);
  //TODO: 还没写完怎么搜索显示出来，比如像搜索按时间排序 比如找出最近一周发布的工作。

  useEffect(() => {
    // function sleep(ms) {
    //   return new Promise((resolve) => setTimeout(resolve, ms));
    // }
    async function getJobs(filter) {
      dispatch({ type: "FETCH_INIT" });
      // const headers = {
      //   "Content-Type": "application/json",
      // };

      //await sleep(600);
      // dispatch({ type: "FETCH_SUCCESS", payload: data });
      try {
        const response = await axios.get(filter ? `url?title=${filter}` : url);
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    }
    //不写这个ref会怎么样？
    if (didMountRef.current) {
      getJobs();
    }
  }, [filter]);

  return [state, setFilter];
}
//删
export function useJobDelete() {
  const didMountRef = useRef(false);
  //useRef可以保存组件更新前的一些状态，仅仅是在路径中起到缓存数据的作用
  //useRef is a React Hook that lets you reference a value that’s not needed for rendering.
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
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: id });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };
    //useRef.current property(returns a mutable ref object) is initialized to the passed argument (initialValue).
    //The returned object will persist for the full lifetime of the component.
    if (didMountRef.current && id) {
      deleteJob();
    } else {
      didMountRef.current = true;
    }
  }, [id]);

  return [state, setId];
}
//改
export function useJobSave() {
  const didMountRef = useRef(false);
  //useRef修改ref的值不会重新render,在组件更新时触发设置成false
  //useRef可以保存组件更新前的一些状态(还有一种事DOM对象)，仅仅是在路径中起到缓存数据的作用
  // the current value of that ref through the ref.current property. This value is intentionally mutable, meaning you can both read and write to it
  //组件更新时，ref.current中保存的值(null)不会自动更新，需要我们手动更新
  const url = servicePath.getJobs;
  const [job, setJob] = useState(null);

  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const putJob = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.put(url + job.id, job);
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: job });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    const postJob = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.post(url, job);
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }
    };

    if (didMountRef.current && job && job.id) {
      putJob();
    } else if (didMountRef.current && job) {
      postJob();
    } else {
      didMountRef.current = true;
    }
  }, [job]);
  //一个是给出去的state 另一个是用来给consumer更新state的
  return [state, setJob];
}
//增
export function useJobPost() {
  const didMountRef = useRef(false);

  const url = servicePath.getJobs;

  const [job, setJob] = useState(null);

  const [state, dispatch] = useReducer(jobAPIReducer, {
    isLoading: false,
    isError: false,
    data: null,
  });

  useEffect(() => {
    const postJob = async () => {
      dispatch({ type: "FETCH_INIT" });

      try {
        const response = await axios.post(url, job);
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      } catch (error) {
        console.log(error);
        dispatch({ type: "FETCH_FAILURE" });
      }

      if (didMountRef.current && job) {
        postJob();
      } else {
        didMountRef.current = true;
      }
    };
  }, [job]);

  return [state, setJob];
}

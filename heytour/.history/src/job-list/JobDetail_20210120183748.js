import React, { useEffect, useRef, useReducer } from "react";
import { Button, Form, Modal, message, Icon } from "semantic-ui-react";
import { useJobSave } from "./JobListAPI";
import jobDetailReducer from "./JobDetailReducer";

export default function JobDetail(props) {
  const didMountRef = useRef(false);
  //useRef可以保存组件更新前的一些状态
  //组件更新时，ref.current中保存的值不会自动更新，需要我们手动更新

  const [jobSaveResponse, setJobRequest] = useJobSave();
  // 上面第一个就是hook:useJobSave()return的state 第二个是对应setJob来更新state的

  const [state, dispatch] = useReducer(jobDetailReducer, {
    jobDetail: props.jobSelected,
    isError: false,
    isLoading: false,
    isCreate: props.isCreate,
  });

  useEffect(() => {
    if (didMountRef.current) {
      if (jobSaveResponse.isError) {
        dispatch({ type: "JOBDETAIL_ERROR" });
      } else if (jobSaveResponse.isLoading) {
        dispatch({ type: "JOBDETAIL_LOADING" });
      } else {
        dispatch({ type: "JOBDETAIL_SUCCESS", payload: jobSaveResponse.data });
      }
    } else {
      didMountRef.current = true;
    }
  }, [jobListResponse]);
}

import React, { useEffect, useRef, useReducer } from "react";
import { Button, Form, Modal, message, Icon } from "semantic-ui-react";
import { useJobSave } from "./JobListAPI";
import jobDetailReducer from "./JobDetailReducer";

export default function JobDetail(props) {
  const didMountRef = useRef(false);
  //useRef可以保存组件更新前的一些状态
  //组件更新时，ref.current中保存的值不会自动更新，需要我们手动更新

  const [jobSaveResponse, setJobRequest] = useJobSave();
}

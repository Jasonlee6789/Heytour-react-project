import React, { useEffect, useRef, useReducer } from "react";
import { Button, Form, Modal, message, Icon } from "semantic-ui-react";
import { useJobSave } from "./JobListAPI";
import jobDetailReducer from "./JobDetailReducer";

export default function JobDetail(props) {
  const didMountRef = useRef(false);
}

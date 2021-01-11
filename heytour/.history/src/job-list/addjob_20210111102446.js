import React, { useState } from "react";
import "../static/css/AddJob.css";
import {
  Grid,
  Button,
  Form,
  Modal,
  TextArea,
  Message,
} from "semantic-ui-react";

function AddJob() {
  return (
    <Modal
      closeIcon
      onClose={props.onClose}
      // onOpen={() => props.onOpen}
      open={props.open}
    ></Modal>
  );
}
export default AddJob;

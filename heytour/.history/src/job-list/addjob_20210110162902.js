import React, { useState } from "react";
import "../static/css/AddJob.css";
import { Grid, Button, Form, Modal } from "semantic-ui-react";

function AddJob() {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");

  return <div>我是添加工作</div>;
}
export default AddJob;

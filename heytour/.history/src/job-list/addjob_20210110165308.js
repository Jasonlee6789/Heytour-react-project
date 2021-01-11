import React, { useState } from "react";
import "../static/css/AddJob.css";
import { Grid, Button, Form, Modal } from "semantic-ui-react";

function AddJob() {
  const [id, setId] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [picture, setPicture] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [postedOn, setPostedOn] = useState("");

  const changeJobDesc = (e) => {
    setJobDesc(e.target.value);
  };

  return (
    <div>
      <TextArea placeholder="我是添加工作描述" onChange={changeJobDesc} />
    </div>
  );
}
export default AddJob;

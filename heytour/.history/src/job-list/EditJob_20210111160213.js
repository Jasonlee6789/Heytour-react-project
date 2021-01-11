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

function EditJob() {
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

  const saveJob = () => {
    if (!setId) {
      Message.error("必须输入ID");
      return false;
    } else if (!setIsActive) {
      Message.error("必须选择IsActive");
      return false;
    } else if (!setTitle) {
      Message.error("工作Title不能为空");
      return false;
    } else if (!setLocation) {
      Message.error("工作Location不能为空");
      return false;
    }
    Message.success("格式检验通过");
  };

  return (
    <div>
      <TextArea placeholder="我是添加工作描述" onChange={changeJobDesc} />
    </div>
  );
}
export default EditJob;

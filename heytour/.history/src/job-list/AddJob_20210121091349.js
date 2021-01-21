import React, { useState, useEffect } from "react";
import "../static/css/AddJob.css";
import {
  Modal,
  Form,
  Input,
  TextArea,
  Button,
  Select,
  Message,
} from "semantic-ui-react";
import axios from "axios";
import servicePath from "../config/apiUrl";

function AddJob() {
  const [open, setOpen] = React.useState(false);

  const genderOptions = [
    { key: "t", text: "True", value: "male" },
    { key: "f", text: "False", value: "female" },
  ];

  const [id, setId] = useState(0); //文章的ID，如果是0说明是新增加工作，如果不是0，说明是修改
  const [isActive, setIsActive] = useState(true);
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [picture, setPicture] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [jobDesc, setJobDesc] = useState("");
  const [postedOn, setPostedOn] = useState("");

  useEffect(() => {
    console.log("执行了进入Admin权限的页面");
  }, []);

  const changeId = (e) => {
    setId(e.target.value);
  };

  const changePicture = (e) => {
    setPicture(e.target.value);
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeIndustry = (e) => {
    setIndustry(e.target.value);
  };

  const changeCompany = (e) => {
    setCompany(e.target.value);
  };

  const changeLocation = (e) => {
    setLocation(e.target.value);
  };

  const changeJobDesc = (e) => {
    setJobDesc(e.target.value);
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changeIsActive = (e) => {
    setIsActive(e.target.value);
  };

  const saveJob = () => {
    // if (!setId) {
    //   Message.error("必须输入ID");
    //   return false;
    // } else if (!setIsActive) {
    //   Message.error("必须选择IsActive");
    //   return false;
    // } else if (!setTitle) {
    //   Message.error("工作Title不能为空");
    //   return false;
    // } else if (!setIndustry) {
    //   Message.error("工作Industry不能为空");
    //   return false;
    // } else if (!setCompany) {
    //   Message.error("工作Company不能为空");
    //   return false;
    // } else if (!setLocation) {
    //   Message.error("工作Location不能为空");
    //   return false;
    // } else if (!setEmail) {
    //   Message.error("Email不能为空");
    //   return false;
    // } else if (!setPostedOn) {
    //   Message.error("PostedOn不能为空");
    //   return false;
    // }

    let dataProps = {};
    //id是数字,id是由数据库自动生成的,不能带着id插入
    dataProps.id = parseInt(id);
    dataProps.title = title;
    dataProps.location = location;
    dataProps.industry = industry;
    dataProps.company = company;
    dataProps.email = email;
    dataProps.jobDesc = jobDesc;
    // let dateText = postedOn.replace("-", "/");
    // dataProps.addTime = new Date(dateText).getTime() / 1000;
    //确保数据模型正确
    dataProps.postedOn = new Date();
    dataProps.picture = "";
    console.log(dataProps);
    let data = new FormData();
    data.set("job", dataProps);

    axios
      .post("https://localhost:5001/api/jobs", dataProps, {
        processData: false,
        contentType: false,
      })
      .then((res) => {
        if (res.code == 200) {
          <Message success header="Form Completed" content="发布成功" />;
        }
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Modal
      onOpen={() => setOpen(true)}
      open={open}
      closeIcon
      onClose={() => setOpen(false)}
      trigger={<Button primary>Post</Button>}
    >
      <Modal.Header>Post新工作</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-ID"
              control={Input}
              label="Picture"
              placeholder="Picture"
              onChange={changePicture}
            />
            <Form.Field
              id="form-input-control-Title"
              control={Input}
              label="Title"
              placeholder="Title"
              onChange={changeTitle}
            />
            <Form.Field
              id="form-input-control-Industry"
              control={Input}
              label="Industry"
              placeholder="Industry"
              onChange={changeIndustry}
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{
                children: "IsActive",
                htmlFor: "form-select-control-gender",
              }}
              placeholder="IsActive"
              onChange={changeIsActive}
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>

          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-Company"
              control={Input}
              label="Company"
              placeholder="Company"
              onChange={changeCompany}
            />
            <Form.Field
              id="form-input-control-Location"
              control={Input}
              label="Location"
              placeholder="Location"
              onChange={changeLocation}
            />
          </Form.Group>

          <Form.Group>
            <Form.Field
              id="form-input-control-Email"
              control={Input}
              label="Email"
              placeholder="Email"
              onChange={changeEmail}
              width={7}
            />
            <Form.Field
              id="form-input-control-PostedOn"
              control={Input}
              label="PostedOn"
              placeholder="PostedOn"
              width={7}
            />
            <Form.Field
              id="form-input-control-PostedOn"
              control={Input}
              label="id"
              placeholder="id"
              width={2}
              onChange={changeId}
            />
          </Form.Group>

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="JobDesc"
            placeholder="工作描述"
            onChange={changeJobDesc}
          />

          <Button
            type="submit"
            onClick={() => {
              saveJob();
              console.log("点击了发布工作");
            }}
          >
            Post
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
export default AddJob;

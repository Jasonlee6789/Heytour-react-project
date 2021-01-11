import React, { useState } from "react";
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

function AddJob() {
  const [open, setOpen] = React.useState(false);

  const genderOptions = [
    { key: "t", text: "True", value: "male" },
    { key: "f", text: "False", value: "female" },
  ];

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
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Post</Button>}
    >
      <Modal.Header>Post框</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="Title"
              placeholder="Title"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Industry"
              placeholder="Industry"
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{
                children: "IsActive",
                htmlFor: "form-select-control-gender",
              }}
              placeholder="Gender"
              search
              searchInput={{ id: "form-select-control-gender" }}
            />
          </Form.Group>
          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="JobDesc"
            placeholder="工作描述"
          />

          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="检验完成提交发布"
            type="submit"
          />
        </Form>
      </Modal.Content>
    </Modal>
  );
}
export default AddJob;

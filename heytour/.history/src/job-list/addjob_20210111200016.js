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
    <Message success header="Form Completed" content="You're ready to Post" />;
  };

  const changeJobDesc = (e) => {
    setJobDesc(e.target.value);
  };

  return (
    <Modal
      closeIcon
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button primary>Post</Button>}
    >
      <Modal.Header>Post新工作</Modal.Header>
      <Modal.Content>
        <Form>
          <Form.Group widths="equal">
            <Form.Field
              id="form-input-control-first-name"
              control={Input}
              label="ID"
              placeholder="ID"
            />
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

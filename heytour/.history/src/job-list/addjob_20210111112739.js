import React, { useState } from "react";
import "../static/css/AddJob.css";
import {
  Modal,
  Form,
  Input,
  TextArea,
  Button,
  Select,
} from "semantic-ui-react";

function AddJob() {
  const [open, setOpen] = React.useState(false);

  const genderOptions = [
    { key: "m", text: "Male", value: "male" },
    { key: "f", text: "Female", value: "female" },
    { key: "o", text: "Other", value: "other" },
  ];

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
              label="First name"
              placeholder="First name"
            />
            <Form.Field
              id="form-input-control-last-name"
              control={Input}
              label="Last name"
              placeholder="Last name"
            />
            <Form.Field
              control={Select}
              options={genderOptions}
              label={{
                children: "Gender",
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
            label="Opinion"
            placeholder="Opinion"
          />
          <Form.Field
            id="form-input-control-error-email"
            control={Input}
            label="Email"
            placeholder="joe@schmoe.com"
            error={{
              content: "Please enter a valid email address",
              pointing: "below",
            }}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Confirm"
            label="Label with htmlFor"
            type="submit"
          />
        </Form>
      </Modal.Content>
    </Modal>
  );
}
export default AddJob;

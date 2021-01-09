import React from "react";
import { Button } from "semantic-ui-react";

export default function NavAdmin() {
  return (
    <div>
      <Button
        color="teal"
        content="Post New Job"
        icon="add"
        labelPosition="left"
        onClick={() => {
          console.log("点击了添加新工作");
        }}
      />
      <Button
        //onClick={() => props.putJob(props.job.id)}
        icon="edit"
        floated="left"
        content="Edit"
        color="teal"
        onClick={() => {
          console.log("点击了更改工作");
        }}
      />
    </div>
  );
}

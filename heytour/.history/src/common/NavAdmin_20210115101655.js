import React from "react";
import { Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import AddJob from "../job-list/AddJob";

export default function NavAdmin(props) {
  let { history } = props;
  return (
    <div>
      <AddJob />
      {/* <Link to="/addjob">
          <Button
            primary
            content="Post "
            icon="add"
            onClick={() => {
              <AddJob />;

              console.log("点击了添加新工作");
            }}
          />
        </Link> */}
      {/* <Link to="/admin/"> */}
      <Button
        //onClick={() => props.putJob(props.job.id)}
        //icon="edit"
        //floated="left"
        content="管理发布的工作"
        primary
        onClick={() => {
          console.log("点击了管理发布的工作");
          history.push("/admin");
        }}
      />
      {/* </Link> */}
    </div>
  );
}

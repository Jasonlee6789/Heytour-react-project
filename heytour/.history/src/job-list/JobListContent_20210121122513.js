import React, { useState } from "react";
import { Button, Image, Card, Grid, Icon } from "semantic-ui-react";
// import data from "./data.json";
import moment from "moment";

export default function JobListContent(props) {
  const [isAdmin, setIsAdmin] = useState(false);

  // const data = data.map((props.job) => {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Card fluid>
          <Card.Content textAlign="left">
            <Image
              src={props.job.picture}
              size="small"
              wrapped
              floated="right"
            />
            <Card.Header>
              {props.job.title} <br />
              <br />
              Company Name: {props.job.company}
            </Card.Header>
            <Card.Description>
              {"Listed On: " + moment(props.job.postedOn).format("YYYY-MM-DD")}
            </Card.Description>
          </Card.Content>

          <Card.Content textAlign="left">
            <Card.Meta>
              Status:{" "}
              {props.job.isActive ? (
                <Icon name="circle check" color="green" content="Active">
                  Active
                </Icon>
              ) : (
                <Icon name="times circle" color="red" content="Expired">
                  Expired
                </Icon>
              )}
            </Card.Meta>
            <Card.Meta>
              Location: {props.job.location} - Industry: {props.job.industry}
            </Card.Meta>
            {/* <Card.Meta>Industry: {props.job.industry}</Card.Meta> */}
            <Card.Meta>Email: {props.job.email}</Card.Meta>
            <Card.Meta>Post Date: {props.job.postedOn}</Card.Meta>
            <Card.Description>{props.job.jobDesc}</Card.Description>
          </Card.Content>

          <Card.Content>
            <Button
              onClick={(e) => {
                props.deleteJob(props.job.id);
                console.log("点击了删除");
                // const url =
                //   "https://localhost:44351/api/jobs/" + props.job.id;
                // axios.delete(url);
              }}
              icon="minus"
              floated="right"
              content="Delete"
              color="teal"
            />
            <Button
              icon="edit"
              floated="right"
              content="Edit"
              primary
              onClick={() => {
                props.onEdit(props.job);
                console.log("点击了编辑");
                // <Route path="/job/:${props.job.id} " component={JobDetail} />;
              }}
            />

            <Button icon="plus" floated="right" content="Apply" primary />
            <Button icon="star" floated="right" content="Save" primary />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
  // });
  // return <Grid padded>{data.job}</Grid>;
}

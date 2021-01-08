import React from "react";
import { Button, Image, Card, Grid, Icon } from "semantic-ui-react";
// import data from "./data.json";
import moment from "moment";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import JobDetail from "./JobDetail";
export default function JobListContent(props) {
  function Jump() {
    return (
      <Router>
        <Link to="/job/"></Link>
        <Route path="/job/:id" component={JobDetail} />
      </Router>
    );
  }
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

          <Card.Content extra>
            <Button
              onClick={() => {
                props.deleteJob(props.job.id);
                console.log("点击了删除");
              }}
              key={props.job.id}
              icon="minus"
              floated="right"
              content="Delete"
              color="black"
            />
            <Button
              onClick={() => props.putJob(props.job.id)}
              icon="edit"
              floated="right"
              content="Edit"
              color="green"
            />
            <Button icon="plus" floated="right" content="Apply" color="green" />
            <Button
              icon="plus"
              floated="right"
              content="More Details"
              color="green"
              onClick={() => {
                console.log("点击了Detail");
                Jump();
              }}
            />
            <Button icon="star" floated="right" content="Save" color="red" />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
  // });
  // return <Grid padded>{data.job}</Grid>;
}

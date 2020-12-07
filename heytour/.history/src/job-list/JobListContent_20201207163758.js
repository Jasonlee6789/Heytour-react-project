import React from "react";
import { Button, Image, Card, Grid, Icon } from "semantic-ui-react";
// import data from "./data.json";

function JobListContent() {
  // const getData = data.map((data) => {
  return (
    <Grid.Row>
      <Grid.Column width={16}>
        <Card fluid>
          <Card.Content textAlign="left">
            <Image src={data.picture} size="small" wrapped floated="right" />
            <Card.Header>
              {data.title} <br />
              <br />
              Company Name: {data.company}
            </Card.Header>
            <Card.Description>{data.jobDesc}</Card.Description>
          </Card.Content>

          <Card.Content textAlign="left">
            <Card.Meta>
              Status:{" "}
              {data.isActive ? (
                <Icon name="circle check" color="green" content="Active">
                  Active
                </Icon>
              ) : (
                <Icon name="times circle" color="red" content="Expired">
                  Expired
                </Icon>
              )}
            </Card.Meta>
            <Card.Meta>Location: {data.location}</Card.Meta>
            <Card.Meta>Industry: {data.industry}</Card.Meta>
            <Card.Meta>Email: {data.email}</Card.Meta>
            <Card.Meta>Post Date: {data.postedOn}</Card.Meta>
            <Card.Description>{data.jobDesc}</Card.Description>
          </Card.Content>

          <Card.Content textAlign="left">
            <Button icon="plus" floated="right" content="Apply" color="green" />

            <Button icon="star" floated="right" content="Save" color="red" />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid.Row>
  );
  // });
  // return <Grid padded>{getData}</Grid>;
}

export default JobListContent;

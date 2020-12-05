import React from "react";
import { Button, Image, Card, Grid, Icon } from "semantic-ui-react";
import data from "../job-list/data.json";

function IndexList() {
  const getData = data.map((data) => {
    return (
      <Grid.Row>
        <Grid.Column width={16}>
          <Card>
            <Card.Content>
              <Card.Header>
                <Image src={data.picture} size="small" floated="right" />
                {data.title} -- {data.company}
              </Card.Header>
            </Card.Content>

            <Card.Content>
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
              <Button
                icon="plus"
                floated="right"
                content="Apply"
                color="green"
              />

              <Button icon="star" floated="right" content="Save" color="red" />
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid.Row>
    );
  });
  return <Grid padded>{getData}</Grid>;
}

export default IndexList;

import React from "react";
import { Button, Image, Card, Grid, Icon } from "semantic-ui-react";
import data from "../data/data.json";

function IndexList() {
  const status = "";
  const getData = data.map((data) => {
    switch (data.IsActive) {
      case "true":
        status = "Active";
        break;
      case "false":
        status = "Not Active";
    }

    return (
      <div>
        <Card key={data.id} fluid>
          <Card.Content textAlign="left">
            <Card.Header>
              <Image src={data.picture} size="small" />
              {data.title} - {""}
              {data.company} ({status})
            </Card.Header>
          </Card.Content>
          <Card.Content textAlign="left">
            <Card.Meta>Location: {data.location}</Card.Meta>
            <Card.Meta>Industry: {data.industry}</Card.Meta>
            <Card.Meta>Email: {data.email}</Card.Meta>
            <Card.Meta>Post Date: {data.postedOn}</Card.Meta>
          </Card.Content>
          <Card.Content textAlign="left">
            <Card.Description>{data.jobDesc}</Card.Description>
            <Button icon="star" floated="right" content="Save" />
            <Button
              icon="thumbs down"
              floated="right"
              content="Not Interested"
              color="red"
            />
          </Card.Content>
        </Card>
      </div>
    );
  });
  return (
    <Grid padded fluid>
      <Grid.Row>
        <Grid.Column>
          <Card.Group>{getData}</Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default IndexList;

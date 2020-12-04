import React from "react";
import { Button, Grid, Image, Card, Icon, List } from "semantic-ui-react";
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
  }
  return (
    <div>
      <Card key={data.id} fluid>
        <Card.Content>
          <Card.Header>
            {data.title} - {data.company} ({status})
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Image src={data.picture} size="small" />
          <Card.Meta>{data.location}</Card.Meta>
          <Card.Meta>{data.industry}</Card.Meta>
          <Card.Meta>{data.email}</Card.Meta>
          <Card.Meta>{data.postedOn}</Card.Meta>
          <Card.Description>{data.jobDesc}</Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
  )

}

export default IndexList;

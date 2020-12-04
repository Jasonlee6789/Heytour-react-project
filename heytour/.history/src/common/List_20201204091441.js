import React from "react";
import { Button, Image, Card } from "semantic-ui-react";
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
              {data.title} - {""}
              {data.company} ({status})
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
  });
  return <Card.Group>{getData}</Card.Group>;
}

export default IndexList;

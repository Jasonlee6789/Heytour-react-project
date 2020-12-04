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
  });
  return (
    <div>
      <Grid padded={"horizontally"}>
        <Grid.Column width={4}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>

      <Grid padded={"horizontally"}>
        <Grid.Column width={4}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={9}>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Grid.Column>
        <Grid.Column width={3}>
          <Card>
            <Image
              src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
              wrapped
              ui={false}
            />
            <Card.Content>
              <Card.Header>Matthew</Card.Header>
              <Card.Meta>
                <span className="date">Joined in 2015</span>
              </Card.Meta>
              <Card.Description>
                Matthew is a musician living in Nashville.
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name="user" />
                22 Friends
              </a>
            </Card.Content>
          </Card>
        </Grid.Column>
      </Grid>
      <List divided verticalAlign="middle">
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lena.png"
          />
          <List.Content>Lena</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/lindsay.png"
          />
          <List.Content>Lindsay</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/mark.png"
          />
          <List.Content>Mark</List.Content>
        </List.Item>
        <List.Item>
          <List.Content floated="right">
            <Button>Add</Button>
          </List.Content>
          <Image
            avatar
            src="https://react.semantic-ui.com/images/avatar/small/molly.png"
          />
          <List.Content>Molly</List.Content>
        </List.Item>
      </List>
    </div>
  );
}

export default IndexList;

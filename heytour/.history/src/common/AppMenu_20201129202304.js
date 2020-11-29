import React, { useState, useReducer } from "react";
import { Menu, Button, Grid, Image, Card, Icon } from "semantic-ui-react";
import Login from "../authentication/Login";
import LoginReducer from "../authentication/LoginReducer";

export default function AppMenu() {
  const [loginOpen, setLoginOpen] = useState(false);

  const [isUserLogin, setIsUserLogin] = useState(false);

  const [userName, setUserName] = useState(null);

  const initState = {
    userName: "",
    pwd: "",
    isLoading: false,
    error: "",
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(LoginReducer, initState);

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleLoginClose() {
    setLoginOpen(false);
  }

  function handleLogin(username) {
    console.log(username);
    dispatch({ type: "login" });
    if (username) {
      setIsUserLogin(true);
      setUserName(username);
      setLoginOpen(false);
    }
  }

  return (
    <div>
      <Menu size="large">
        <Menu.Item name="Heytour-Jing" />
        <Menu.Menu position="right">
          <Menu.Item>
            {isUserLogin ? (
              <div>{userName && userName}</div>
            ) : (
              <Button
                primary
                onClick={() => {
                  handleOpenLogin();
                }}
              >
                Login
              </Button>
            )}
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {loginOpen && (
        <Login
          open={loginOpen}
          onClick={handleLoginClose}
          onLogin={handleLogin}
        />
      )}
      <Grid padded={horizontally}>
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

      <Grid>
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
    </div>
  );
}

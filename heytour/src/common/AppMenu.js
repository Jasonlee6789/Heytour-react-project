import React, { useState, useReducer } from "react";
import { Menu, Button, Grid, Image } from "semantic-ui-react";
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

      <Grid celled="internally">
        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src="https://react.semantic-ui.com/images/wireframe/centered-paragraph.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
          <Grid.Column width={10}>
            <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
          </Grid.Column>
          <Grid.Column width={3}>
            <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}

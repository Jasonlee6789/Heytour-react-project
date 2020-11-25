import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";

export default function AppMenu() {
  const [loginOpen, setLoginOpen] = useState(false);

  const [isUserLogin, setIsUserLogin] = useState(false);

  const [userName, setUserName] = useState(null);

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleLoginClose() {
    setLoginOpen(false);
  }

  function handleLogin(username) {
    console.log(username);
    if (username) {
      setIsUserLogin(true);
      setUserName(username);
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
    </div>
  );
}

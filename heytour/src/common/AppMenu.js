import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";

export default function AppMenu() {
  const [loginOpen, setLoginOpen] = useState(false);

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleLoginClose() {
    setLoginOpen(false);
  }
  return (
    <div>
      <Menu size="large">
        <Menu.Item name="Heytour-jing" />
        <Menu.Menu position="right">
          <Menu.Item>
            <Button primary onClick={handleOpenLogin}>
              Login
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      {loginOpen && <Login open={loginOpen} onClick={handleLoginClose} />}
    </div>
  );
}

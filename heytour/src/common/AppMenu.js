import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";

export default function AppMenu() {
  const [loginOpen, setLoginOpen] = useState(false);
  //   const [showButton, setShowButton] = useState(true);
  //   const [username, setUsername] = useState("");

  function handleOpenLogin() {
    setLoginOpen(true);
  }

  function handleLoginClose() {
    setLoginOpen(false);
  }

  function handleLogin(username) {
    //1.关闭button
    // setShowButton(false);
    //2.回传用户名在原来button位置
    console.log(username);
    // return props.user;
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
            {/* <div>uname</div> */}
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

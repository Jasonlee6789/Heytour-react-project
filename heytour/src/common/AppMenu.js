import React, { useState } from "react";
import { Menu, Button } from "semantic-ui-react";

export default function AppMenu() {
  return (
    <Menu size="large">
      <Menu.Item name="Heytour-jing" />
      <Menu.Menu position="right">
        <Menu.Item>
          <Button primary>Login</Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

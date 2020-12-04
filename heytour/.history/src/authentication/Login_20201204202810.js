import React, { useState, useRef } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { useLogin } from "./LoginAPI";

export default function Login(props) {
  const didMountRef = useRef(false);
  const [login, setLogin] = useLogin;
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  //   const [isLoading, setIsLoading] = useState(false);

  //   const checkLogin = () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   };

  return (
    <Modal
      closeIcon
      onClose={() => props.onClose}
      onOpen={() => props.onOpen}
      open={props.open}
    >
      <Modal.Header>登录框</Modal.Header>
      <Form>
        <Form.Field>
          <label>输入用户名</label>
          <input
            type="text"
            placeholder="User Name"
            value={user}
            //onChange 属性，当Input框的内容被改变的时候，
            //就自动调用onChange中的函数，然后在函数中使用set方法将用户名和密码储存到state中
            onChange={(e) => {
              setUser(e.target.value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <label>输入密码</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Field>

        <Button onClick={props.onClick}>Close</Button>
        <Button
          type="submit"
          onClick={() => {
            props.onLogin(user);
          }}
        >
          Login
        </Button>
      </Form>
    </Modal>
  );
}

import React, { useEffect, useRef, useReducer } from "react";
import { Button, Form, Modal } from "semantic-ui-react";
import { useLogin } from "./LoginAPI";
import authReducer from "./LoginReducer";

export default function Login(props) {
  const didMountRef = useRef(false);
  const [login, setLogin] = useLogin(null);

  const [state, dispatch] = useReducer(authReducer, {
    username: "",
    password: "",
    isError: false,
    isLoading: false,
    validation: {},
  });

  useEffect(() => {
    if (didMountRef.current) {
      if (login.isError) {
        dispatch({ type: "AUTH_ERROR" });
      } else if (login.isLoading) {
        dispatch({ type: "AUTH_LOADING" });
      } else {
        props.onLogin(login.data);
      }
    } else {
      didMountRef.current = true;
    }
  }, [login]);

  function handleLogin() {
    const user = {
      username: state.username,
      password: state.password,
    };
    setLogin(user);
  }
  /*const [user, setUser] = useState("");
  const [password, setPassword] = useState("");*/

  //   const [isLoading, setIsLoading] = useState(false);

  //   const checkLogin = () => {
  //     setIsLoading(true);
  //     setTimeout(() => {
  //       setIsLoading(false);
  //     }, 2000);
  //   };
  function handleChange(e, { name, value }) {
    dispatch({ type: "AUTH_TYPING", payload: { name: name, value: value } });
  }

  return (
    <Modal
      closeIcon
      onClose={() => props.onClose}
      onOpen={() => props.onOpen}
      open={props.open}
    >
      <Modal.Header>登录框</Modal.Header>
      <Form
        onSubmit={handleLogin}
        loading={state.isLoading}
        error={state.isError}
      >
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

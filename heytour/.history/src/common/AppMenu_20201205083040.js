import React, { useReducer } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";
import appMenuReducer from ".AppMenuReducer";
import IndexList from "./List";

export default function AppMenu() {
  // const [loginOpen, setLoginOpen] = useState(false);

  // const [isUserLogin, setIsUserLogin] = useState(false);

  // const [userName, setUserName] = useState(null);

  // const initState = {
  //   userName: "",
  //   pwd: "",
  //   isLoading: false,
  //   error: "",
  //   isLoggedIn: false,
  // };

  // const [state, dispatch] = useReducer(LoginReducer, initState);
  const [state, dispatch] = useReducer(appMenuReducer, {
    user: {},
    authenticated: false,
    authOpen: false,
  });

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
      <IndexList />
    </div>
  );
}

import React, { useReducer } from "react";
import { Menu, Button } from "semantic-ui-react";
import Login from "../authentication/Login";
import appMenuReducer from "./AppMenuReducer";

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
    // setLoginOpen(true);
    dispatch({ type: "AUTHENTICATING" });
  }

  function handleLoginClose() {
    // setLoginOpen(false);
    dispatch({ type: "UNAUTHENTICATED" });
  }

  function handleLogin(user) {
    console.log(user);
    // dispatch({ type: "login" });
    dispatch({ type: "AUTHENTICATED", payload: { user: user } });
    // if (username) {
    //   setIsUserLogin(true);
    //   setUserName(username);
    //   setLoginOpen(false);
    // }
  }

  return (
    <div>
      <Menu size="large">
        <Menu.Item name="Heytour-Jing" />
        <Menu.Menu position="right">
          {/* <Menu.Item>
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
          </Menu.Item> */}
          {!state.authenticated && (
            <Menu.Item>
              <Button primary onClick={handleOpenLogin}>
                Login
              </Button>
            </Menu.Item>
          )}

          {state.authenticated && (
            <Menu.Item
              name={state.user.firstName + " " + state.user.lastName}
            />
          )}

          {state.authenticated && (
            <Menu.Item>
              <Button primary onClick={handleLoginClose}>
                Logout
              </Button>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>

      {/* {loginOpen && (
        <Login
          open={loginOpen}
          onClick={handleLoginClose}
          onLogin={handleLogin}
        />
      )} */}
      {state.authOpen && (
        <Login
          open={state.authOpen}
          onClose={handleLoginClose}
          onLogin={handleLogin}
        />
      )}
    </div>
  );
}

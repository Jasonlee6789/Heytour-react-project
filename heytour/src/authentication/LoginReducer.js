export default function LoginReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return action.user;
    case "NOTLOGIN":
      return "";
  }
  return state;
}

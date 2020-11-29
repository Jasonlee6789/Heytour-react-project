export default function LoginReducer(state, action) {
  switch (action.type) {
    case "login":
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    case "success":
      return {
        ...state,
        isLoggedIn: true,
        isLoading: false,
      };
    case "error":
      return {
        ...state,
        error: action.payload.error,
        name: "",
        pwd: "",
        isLoading: false,
      };
    default:
      return state;
  }
}

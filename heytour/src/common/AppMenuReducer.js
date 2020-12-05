export default function appMenuReducer(state, action) {
  switch (action.type) {
    case "AUTHENTICATED":
      return {
        ...state,
        user: action.payload.user,
        authenticated: true,
        authOpen: false,
      };
    case "AUTHENTICATING":
      return {
        ...state,
        authOpen: true,
      };
    case "UNAUTHENTICATED":
      return {
        ...state,
        user: {},
        authenticated: false,
        authOpen: false,
      };

    default:
      return state;
  }
}

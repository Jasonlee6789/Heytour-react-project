export default function authReducer(state, action) {
  switch (action.type) {
    case "VALIDATION_ERROR":
      return {
        ...state,
        validation: action.validation,
      };
    case "AUTH_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
        userName: "",
        password: "",
      };
    case "AUTH_LOADING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case "AUTH_INIT":
      return {
        ...state,
        isError: false,
        isLoading: false,
        userName: "",
        password: "",
      };
    case "AUTH_TYPING":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    default:
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
  }
}

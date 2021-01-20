export default function jobDetailReducer(state, action) {
  switch (action.type) {
    case "VALIDATION_ERROR":
      return {
        ...state,
        validation: action.validation,
      };
  }
}

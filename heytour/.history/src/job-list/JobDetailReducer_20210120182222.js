export default function jobDetailReducer(state, action) {
  switch (action.type) {
    case "VALIDATION_ERROR":
      return {
        ...state,
        validation: action.validation,
      };

    case "JOBDETAIL_ERROR":
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    case "JOBDETAIL_SUCCESS":
      return {
        ...state,
        isError: true,
        isLoading: false,
        jobDetail: action.payload,
      };

    case "JOBDETAIL_LOADING":
      return { ...state, isError: true };
  }
}

export default function jobDetailReducer(state, action) {
  switch (action.type) {
    // type：字符串，动作的类型
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
        // payload：任意类型，动作发生后的附加信息
      };

    case "JOBDETAIL_LOADING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };

    case "JOBDETAIL_INIT":
      return {
        ...state,
        isError: false,
        isLoading: false,
      };

    case "JOBDETAIL_TYPING":
      return {
        ...state,
        jobDetail: action.payload,
      };

    default:
      return {
        ...state,
        isError: false,
        isLoading: false,
      };
  }
}

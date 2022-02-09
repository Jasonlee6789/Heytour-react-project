//all the state update logic  in a single function  “reducer.”
//event handlers become concise because they only specify the user “actions.”
// so that the reducer function specifies how the state should update in response to each action!
//The object you pass to dispatch is called an “action:”
//The  reducer function is where you will put your state logic.
//It takes two arguments, the current state and the action object, and it returns the next state for React to set.
export default function jobDetailReducer(state, action) {
  switch (action.type) {
    // type：字符串，动作的类型 action types should ideally describe “what the user did” rather than “how you want the state to change”.
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

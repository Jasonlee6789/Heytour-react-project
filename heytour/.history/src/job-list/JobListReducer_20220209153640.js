//all the state update logic  in a single function  “reducer.”
//event handlers become concise because they only specify the user “actions.”
// so that the reducer function specifies how the state should update in response to each action!
//The object you pass to dispatch is called an “action:”
//The  reducer function is where you will put your state logic.
//It takes two arguments, the current state and the action object, and it returns the next state for React to set.
//Actions describe “what happened,” not “what to do.”
export default function jobListReducer(state, action) {
  switch (
    action.type // action types should ideally describe “what the user did” rather than “how you want the state to change”.
  ) {
    case "JOBLIST_ERROR":
      return {
        ...state,
        jobs: [],
        jobSelected: {},
        isError: true,
        isLoading: false,
      };
    case "JOBLIST_LOADING":
      return {
        ...state,
        isError: false,
        isLoading: true,
      };
    case "JOBLIST_SUCCESS":
      return {
        ...state,
        jobs: action.payload,
        jobSelected: {},
        isError: false,
        isLoading: false,
      };
    case "JOBLIST_INIT":
      return {
        ...state,
        jobs: [],
        jobSelected: {},
        isError: false,
        isLoading: false,
        jobDetailOpen: false,
        isCreate: false,
      };

    case "JOBDETAIL_EDIT":
      return {
        ...state,
        // jobs.map(j =>
        // {
        //   if (j.id === action.job.id)
        //   { return action.job; }
        //   else {
        //     return j;
        //   }
        // }),
        jobSelected: action.payload,
        jobDetailOpen: true,
        isCreate: false,
      };

    case "JOBDETAIL_ADD":
      return {
        ...state,
        jobSelected: {},
        jobDetailOpen: true,
        isCreate: true,
      };

    case "JOBDETAIL_SAVE":
      return {
        ...state,
        jobs: action.payload,
        jobDetailOpen: false,
        isCreate: true,
      };

    case "JOBDETAIL_CLOSE":
      return {
        ...state,
        jobSelected: {},
        jobDetailOpen: false,
        isCreate: false,
      };

    default:
      return {
        ...state,
        isError: false,
        isLoading: false,
        jobDetailOpen: false,
      };
  }
}

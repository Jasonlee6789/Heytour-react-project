//all the state update logic  in a single function  “reducer.”
//event handlers become concise because they only specify the user “actions.”
// so that the reducer function specifies how the state should update in response to each action!
export default function jobListReducer(state, action) {
  switch (action.type) {
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

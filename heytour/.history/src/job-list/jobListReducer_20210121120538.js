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
  }
}

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
      
  }  case 'JOBLIST_LOADING':
  return {
    ...state,
    isError: false,
    isLoading: true
  };
}

export const DataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA_SUCCESS":
      return {
        repoData: action.data,
        error: null,
        isLoading: false,
      };

    case "FETCH_DATA_HAS_ERROR":
      return {
        repoData: null,
        error: action.error.response
          ? action.error.response.data.message
          : action.error.message,
        isLoading: false,
      };

    case "FETCH_DATA_IS_LOADING":
      return {
        repoData: null,
        error: null,
        isLoading: true,
      };

    default:
      return state;
  }
};

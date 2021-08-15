export const IncreaseCount = () => {
  return {
    type: "INCREMENT",
  };
};

export const DecreaseCount = () => {
  return {
    type: "DECREMENT",
  };
};

export const FetchDataSuccess = (data) => {
  return {
    type: "FETCH_DATA_SUCCESS",
    data: data,
  };
};

export const FetchDataHasError = (error) => {
  return {
    type: "FETCH_DATA_HAS_ERROR",
    error: error,
  };
};

export const FetchDataIsLoading = () => {
  return {
    type: "FETCH_DATA_IS_LOADING",
  };
};

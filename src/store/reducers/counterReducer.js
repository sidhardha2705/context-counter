export const CounterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
};

import { createContext, useReducer } from "react";
import { CounterReducer } from "./reducers/counterReducer";
import { DataReducer } from "./reducers/dataReducer";

const initialCount = 0;
const initialData = { repoData: null, error: null, isLoading: false };

export const CounterContext = createContext(initialCount);
export const DataContext = createContext(initialData);

const Store = ({ children }) => {
  const [count, counterDispatch] = useReducer(CounterReducer, initialCount);
  const [data, dataDispatch] = useReducer(DataReducer, initialData);

  return (
    <CounterContext.Provider value={{ count, counterDispatch }}>
      <DataContext.Provider value={{ data, dataDispatch }}>
        {children}
      </DataContext.Provider>
    </CounterContext.Provider>
  );
};

export default Store;

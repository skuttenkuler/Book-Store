import React, { createContext, useReducer, useContext } from "react";


const StoreContext = createContext();
const { Provider } = StoreContext;


const reducer = function(state, action) {
  switch (action.type) {
    
    case "loadFavs":
      return action.books;
    case "search":
      return action.results;
    default:
      return state;
  }
};

const StoreProvider = function({ value = [], ...props }) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "loadFavs":
        return action.books;
      case "search":
        return action.results;
      default:
        return state;
    }
  }, []);

  return <Provider value={[state, dispatch]} {...props} />;
};


const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
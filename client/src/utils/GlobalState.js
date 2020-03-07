import React, { creacteContext, useReducer, useContext } from 'react';
import { createContext } from 'vm';

const StoreContext = createContext();
const {Provider} = StoreContext;

const reducer = function(state, action) {
    switch (action.type) {
        case "single":
            return "single";
        case "loadFavs":
            return action.books;
        case "search":
            return action.searchRes;
        default:
            return state;

    }
};

const StoreProvider = function({ vale = [], ...props }){
    const [state, dispatch] = useReducer((state,action) => {
        switch (action.type) {
            case "single":
                return "single";
            case "loadFavs":
                return action.books;
            case "search":
                return action.searchRes
            default:
                return state;
        }
    }, []);
    return <Provider value={[state, dispatch]} {...props} />
}

const useStoreContext = () => {
    return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};
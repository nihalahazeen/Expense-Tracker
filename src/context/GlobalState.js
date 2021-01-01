import React, {createContext, useReducer} from "react";
import FunctionReducer from "./FunctionReducer"

const initialState = {
   transactions: []
}

export const StateContext = createContext(initialState);

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer(FunctionReducer,initialState);

    function deleteTransaction(id){
        dispatch({
            type: "Delete_Transaction",
            payload: id
        });
    }

    function addTransaction(transaction){
        dispatch({
            type: "Add_Transaction",
            payload: transaction
        })
    }

    return (<StateContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
        }}>
        {children}
    </StateContext.Provider>);
}

import React, {useContext} from "react";
import {StateContext} from "../context/GlobalState"

export function Expensetracking() {
    const {transactions} = useContext(StateContext);
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((accumulator, initialAmount) => (accumulator += initialAmount),0).toFixed(2);
    const sign = total<0 ? "-" : "+";
    if (total<0) {
        window.alert("Your expenses has grossed your income");
    }

    return (
    <div className="expense-tracking">
        <h2>Current Balance</h2>
        <h2>{sign}${Math.abs(total)}</h2>
    </div>
    );
}
import React, {useContext} from 'react'
import {StateContext} from "../context/GlobalState"

export function IncomeExpense() {
    const {transactions} = useContext(StateContext);
    const amount = transactions.map(transaction => transaction.amount);
   
    const income = amount.filter(item => item>0)
    .reduce((reducer,item) => (reducer += item),0).toFixed(2);

    const expense = (amount.filter(item => item<0)
    .reduce((reducer,item) => (reducer += item),0)*-1).toFixed(2);
   
    return (
        <div className="flexing">
            <div>
                <h3>Income</h3>
                <h3>${income}</h3>
            </div>
            <div>
                <h3>Expense</h3>
                <h3>${expense}</h3>
            </div>
        </div>
    )
}

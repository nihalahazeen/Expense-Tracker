import React, {useContext} from "react";
import {StateContext} from "../context/GlobalState";

export function History() {

    const {deleteTransaction} = useContext(StateContext);
    const {transactions} = useContext(StateContext);


    return (
        <div className="history">
            <div>
                <h3>History</h3>
            <ul className="list-style">
                {transactions.map(transaction => (<li key={transaction.id}>
                    {transaction.transaction}
                    <span>{transaction.amount<0 ? "-": "+"}${Math.abs(transaction.amount)}</span>
                    <button onClick={()=>deleteTransaction(transaction.id)} className="del-btn">x</button>
                </li>
                ))}
            </ul>
            </div>
        </div>
    )
}
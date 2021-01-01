import React, {useState, useContext} from "react";
import {StateContext} from "../context/GlobalState"

export function Addtransactions() {

    const [transaction, setTransactionType] = useState('');
    const [amount, setTransactionAmount] = useState(0);
    const {addTransaction} = useContext(StateContext);

    const submitTransaction = e => {
        e.preventDefault();
        
        const newEntry = {
            id: new Date(),
            transaction,
            amount: +amount
        }
        console.log(newEntry)
        addTransaction(newEntry);
    }

    const clear = e => {
        e.target.value = ""
    }

    return (
        <div>
            <h3>Add New Transactions</h3>
            <form className="form-transaction" onSubmit={submitTransaction}>
            <label htmlFor="transactions">Transactions</label>
            <br></br>
            <input type="text" value={transaction} onFocus={clear} onChange={(e)=>setTransactionType(e.target.value)} placeholder="Enter Transaction Type" />
            <br></br>
            <label htmlFor="amount">Amount</label>
            <br></br>
            <sub>(-ve indicates expense, +ve indicates income)</sub>
            <br></br>
            <input type="number" value={amount} onFocus={clear} onChange={(e)=>setTransactionAmount(e.target.value)} placeholder="Enter amount" />
            <br></br>
            <button type="submit">Submit</button>
            </form>
        </div>
    )
}
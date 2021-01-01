import React from 'react';
import './App.css';
import {Header} from "./Components/Header"
import {Expensetracking} from "./Components/Expensetracking"
import {IncomeExpense} from "./Components/IncomeExpense"
import {History} from "./Components/History"
import {Addtransactions} from "./Components/Addtransactions"

import {GlobalProvider} from "./context/GlobalState"


function App() {

  return (
    <GlobalProvider>
    <div>
      <Header />
      <Expensetracking />
      <IncomeExpense />
      <History />
      <Addtransactions />
    </div>
    </GlobalProvider>
  );
}

export default App;

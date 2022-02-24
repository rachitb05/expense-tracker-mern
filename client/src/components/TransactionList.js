import React, { useContext,useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";
function TransactionList() {
  const { transactions,getTransactions } = useContext(GlobalContext);
  useEffect(() => {
    getTransactions();
  }, [])
  
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;

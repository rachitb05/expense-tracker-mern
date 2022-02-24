import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { v4 as uuidv4 } from 'uuid';

function AddTransaction() {
    const [text, setText] = useState("")
    const [amount, setAmount] = useState(0)
    const {addTransaction}=useContext(GlobalContext);

    const onSubmit=(event)=>{
      event.preventDefault();
      const newTransaction={
        id:uuidv4(),
        text,
        amount:+amount
      }
      addTransaction(newTransaction);
    }
  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} placeholder="Enter text..." onChange={(event)=>setText(event.target.value)}/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input type="number" value={amount} placeholder="Enter amount..." onChange={(event)=>setAmount(event.target.value)} />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;

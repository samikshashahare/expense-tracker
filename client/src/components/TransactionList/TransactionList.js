import React, { useEffect, useState } from 'react'
import "./TransactionList.css";
import axios from 'axios';
import Navbar from '../Navbar/Navbar.js'


function App() {
  const [transactions, setTransactions] = useState([]);
  const [creditSum, setCreditSum] = useState(0);
  const [debitSum, setDebitSum] = useState(0);
  
  const CATEGORY_EMOJI_MAP = {
    "food": "🍔",
    "entertainment": "🎥",
    "rent": "🏦",
    "travel": "🚌",
    "education": "🏫",
    "salary": "💰",
    "freelancing": "💻",
    "side-hussel": "💸",
    "other": "🤷🏼‍♀️"
  }

  const loadTransactions = async () => {
    const response = await axios.get("/api/transactions");
    const transactionData = response?.data?.data;

    let totalCredit = 0;
    let totalDebit = 0;

    transactionData.forEach((transaction)=>{
      if (transaction.type==="credit") {
        totalCredit -= transaction.amount;
      }
      else {
        totalDebit -= transaction.amount;
      }
    })
    setCreditSum(totalCredit);
    setDebitSum(totalDebit);

    setTransactions(transactionData);
  };

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <div className='transaction-contaier'>
      
    <Navbar />

      <div className='transaction-type'>
      <h2>Credit:{creditSum}</h2>
      <h2>Debit:{debitSum}</h2>
      </div>
      {
        transactions?.map((transaction, index) => {
          const { _id, amount, type, category, description, createdAt, updatedAt } = transaction;

          const date = new Date(createdAt).toLocaleDateString();
          const time = new Date(createdAt).toLocaleTimeString();

          return (
            <div key={index} className='transaction-card'>

              <span className={`transaction-amount ${type === "debit" ? 'debit-amount' : 'credit-amount'}`}>
                {type === "debit" ? "-" : "+"}
                {amount}
              </span>
              <span className='amount-status'>
                {type === "debit" ? "debited" : "credited"} on {date} at {time}
              </span>
              <span className='transaction-category'>
                {CATEGORY_EMOJI_MAP[category]}
                {category}
              </span>
              <hr />
              {description}
            </div>
          )
        })
      }

    </div>
  )
}

export default App;
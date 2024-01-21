import React from 'react'
import './Home.css';
import Navbar from '../../components/Navbar/Navbar.js'

function Home() {
  return (
    <div>
    
      <Navbar />

<div className='homepage-div'>
<p className='text-paragraph'>
  This is Expense Tracker App 
  you can add your all credited and debited Transactions
  Track your all Transactions 
  and maintain your Expences
</p>
</div>
    </div>
    
  )
}

export default Home
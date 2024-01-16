import React from 'react'
import {Link} from 'react-router-dom'
import AddTransaction from '../../view/AddTransactions/AddTransaction'
import TransactionList from '../../components/TransactionList/TransactionList'
import SignUP from '../../view/SignUp/SignUp'
import Login from '../../view/Login/Login'


function Navbar() {
  return (
    <div>
      
<div>
    <Link to='AddTransaction' >AddTransaction</Link>
</div>
<div>
    <Link to='TransactionList' >TransactionList</Link>
</div>
<div>
    <Link to='SignUP' >SignUP</Link>
</div>
<div>
    <Link to='Login' >Login</Link>
</div>

    </div>
  )
}

export default Navbar
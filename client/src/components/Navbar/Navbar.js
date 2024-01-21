import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
// import AddTransaction from '../../view/AddTransaction/AddTransaction'
// import TransactionList from '../../components/TransactionList/TransactionList'
// import SignUP from '../../view/SignUp/SignUp'
// import Login from '../../view/Login/Login'


function Navbar() {
    const [user, setUser] = useState({});

    useEffect(() => {
        const storageUse = JSON.parse(localStorage.getItem("user") || '{}');
        setUser(storageUse);
    }, [])
    return (
        <div className='navbar-container'>
            
            <div>
                <Link to='/' className='app-name text-decoration text-color'>Expense Tracker 💰</Link>
            </div>
            
            <div className='links-container'>

            <div className='Home-link margin hover-effect'>
                <Link to='/' className='text-decoration text-color' >Home</Link>
            </div>
                <div className='AddTransaction-link margin hover-effect'>
                    <Link to='/AddTransaction' className='text-decoration text-color' >AddTransaction</Link>
                </div>
                <div className='TransactionList-link margin hover-effect'>
                    <Link to='/TransactionList' className='text-decoration text-color' >TransactionList</Link>
                </div>
                <div className='SignUP-link margin hover-effect'>
                    <Link to='/SignUP' className='text-decoration text-color'>SignUP</Link>
                </div>
                <div className='login margin hover-effect'>
                    <Link to='/Login' className='text-decoration text-color'>Login</Link>
                </div>
            </div>
            <div className='user-name text-color'>
                hello, {user.name || "user"}

                {
                    user?.name ?
                        (
                            <span className='user-Name' onClick={() => {
                                localStorage.removeItem("user");
                                window.location.href = "./login"
                            }}>

                            </span>
                        ) : null
                }
            </div>

        </div>
    )
}

export default Navbar
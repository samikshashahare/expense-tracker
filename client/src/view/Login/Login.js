import React, { useEffect, useState } from 'react'
import './Login.css'
import axios from 'axios';
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.js'

function Login() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const login = async () => {
        try {
            const response = await axios.post('/api/login', {
                email: email,
                password: password
            });
            alert(response?.data?.message)

            if (response?.data?.success) {
                localStorage.setItem('user', JSON.stringify(response?.data?.data))
                window.location.href = '/'
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        const storageUser = JSON.parse(localStorage.getItem("user"))
        if (storageUser?.email) {
            alert('you are already logged in')

        }
    }, [])

    return (
        <div className='login-div'>
            <form>
                <Navbar />
                <h1>Login Here 👇🏼</h1>

                <div className='login-input-div'>

                    <div>

                        <label>Email</label>
                        <br/>
                        <input type='text'
                            placeholder='Enter Email'
                            className='input-login-email design-login-form'
                            id='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label>Password</label>
                        <br/>
                        <input type='text'
                            placeholder='Enter Password'
                            className='input-login-password design-login-form'
                            id='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                    </div>

                    <div>
                        <button type='button'
                            className='login-btn'
                            onClick={login} >
                            Login
                        </button>
                    </div>
                    <p>
                        <Link to='/signUp'>Create New Account</Link>

                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login
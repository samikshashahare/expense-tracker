import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { Link } from 'react-router-dom'

function SignUP() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobile, setMobile] = useState("");

    const signup = async () => {
        if (!name) {
            alert('name is required');
            return
        }
        if (!email) {
            alert('email is required');
            return
        }
        if (!password) {
            alert('password is required');
            return
        }
        if (!mobile) {
            alert('mobile is required');
            return
        }

        const response = await axios.post('/api/signup', {
            name: name,
            email: email,
            password: password,
            mobile: mobile,
        })
        alert(response?.data?.message);

        if (response?.data?.success) {
            window.location.href = '/login'
        }

    }

    return (
        <div className='signup-div'>
            <form>
                <h1>SignUp</h1>
                <div className='signup-input-div'>
                    <div>
                        <input type='text'
                            placeholder='Enter Name'
                            className='input-name design-signup-from'
                            id='name'
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value)
                            }} />
                    </div>
                    <div>
                        <input type='text'
                            placeholder='Enter Email'
                            className='input-email design-signup-from'
                            id='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }} />
                    </div>
                    <div>
                        <input type='text'
                            placeholder='Enter Password'
                            className='input-password design-signup-from'
                            id='password'
                            value={password}
                            onChange={(e) => {
                                setPassword(e.target.value)
                            }} />
                    </div>
                    <div>
                        <input type='number'
                            placeholder='Enter Mobile'
                            className='input-mobile design-signup-from'
                            id='mobile'
                            value={mobile}
                            onChange={(e) => {
                                setMobile(e.target.value)
                            }} />
                    </div>

                    <div>
                        <button type='button'
                            className='signup-btn design-signup-from'
                            onClick={signup}
                        >SignUp
                        </button>
                    </div>
                    <p>
                        <Link to='/login'>Already Have An Account</Link>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default SignUP
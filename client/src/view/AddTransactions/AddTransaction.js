
import './AddTransaction.css';
import React, { useState } from 'react';
import axios from 'axios';


function AddTransaction() {
    const [amount, setAmount] = useState();
    const [type, setType] = useState('credit');
    const [category, setCateory] = useState();
    const [description, setDescription] = useState('');

    const addTransaction = async () => {
        if (!amount) {
            alert('amount is required');
            return
        }
        if (!type) {
            alert('type is required');
            return
        }
        if (!category) {
            alert('category is required');
            return
        }
        const response = await axios.post('/api/transaction', {
            amount,
            type,
            category,
            description
        })
        alert(response?.data?.message);

        if (response?.data?.success) {
            window.location.href = './TransactionList'
        }

    }
    return (
        <div className='addTransaction-div'>
            <h1>AddTransaction</h1>

            <div className='input-div'>

                <div>
                    <input type='number'
                        placeholder='Enter Amount'
                        className='input-amount design-tag'
                        value={amount}
                        onChange={(e) => {
                            setAmount(e.target.value)
                        }} />
                </div>

                <div className='radio-btn-div'>
                    <p>Select Transaction Type</p>

                    <div>
                        <input type='radio'
                            name='type'
                            id='credit'
                            checked={type === 'credit'}
                            onClick={() => {
                                setType('credit')
                            }}
                            className='transactionType-input design-tag'
                        />
                        <label>credit</label>
                    </div>
                    <div>
                        <input type='radio'
                            name='type'
                            id='debit'
                            checked={type === 'debit'}
                            onClick={() => {
                                setType('debit')
                            }}
                            className='transaction-type design-tag'
                        />
                        <label>debit</label>

                    </div>
                </div>

                <div className='select-div'>
                    <select
                        value={category}
                        onChange={(e) => {
                            setCateory(e.target.value)
                        }}
                        className='select-tag design-tag'>

                        <option value={'others'}>Others</option>
                        <option value={'food'}>Food</option>
                        <option value={'entertainment'}>Entertainment</option>
                        <option value={'rent'}>Rent</option>
                        <option value={'shopping'} >Shopping</option>
                        <option value={'travel'}>Travel</option>
                        <option value={'education'}>Education</option>
                        <option value={'salary'}>Salary</option>
                        <option value={'freelancing'}>Freelancing</option>
                        <option value={'side-hussle'}>Side-Hussle</option>
                    </select>
                </div>

                <div>
                    <input type='text'
                        placeholder='Add Description'
                        value={description}
                        onChange={(e) => {
                            setDescription(e.target.value)
                        }}
                        className='description-input design-tag' />

                </div>

                <button type='button'
                    onClick={addTransaction}
                    className='add-btn '>
                    Add Transaction
                </button>

            </div>

        </div>
    )
}

export default AddTransaction
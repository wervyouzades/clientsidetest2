import React, { useState } from 'react';
import { fetchAccountNumber } from './api';

const App = () => {
    const [name, setName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = await fetchAccountNumber(name);
        if (data.accountNumber === '0') {
            setAccountNumber('Account not found');
        } else {
            setAccountNumber(data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
          <input type="text" value={name} onChange={handleNameChange} />
                </label>
                <button type="submit">Get Account Number</button>
            </form>
            <p>{accountNumber}</p>
        </div>
    );
};

export default App;

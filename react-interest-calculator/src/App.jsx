import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';


function App() {
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');

  const handleDeposit = () => {
    setBalance(balance + parseFloat(amount));
    setAmount('');
  };

  const handleWithdraw = () => {
    setBalance(balance - parseFloat(amount));
    setAmount('');
  };

  const handleAddInterest = () => {
    setBalance(balance + (balance * (parseFloat(interestRate) / 100)));
    setInterestRate('');
  };

  const handleChargeFees = () => {
    setBalance(balance - (balance * 0.05)); // 5% fee
  };

  return (
    <div className="container mt-5">
      <h1>Banking System</h1>
      <h2>Current Balance: ${balance.toFixed(2)}</h2>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleDeposit}>Deposit</button>
        <button className="btn btn-secondary mt-2" onClick={handleWithdraw}>Withdraw</button>
      </div>
      <div className="mb-3">
        <input
          type="number"
          className="form-control"
          placeholder="Enter interest rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
        <button className="btn btn-success mt-2" onClick={handleAddInterest}>Add Interest</button>
      </div>
      <button className="btn btn-danger mt-2" onClick={handleChargeFees}>Charge Fees</button>
    </div>
  );
}

export default App

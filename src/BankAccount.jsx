import { useState } from 'react';

function BankAccount(props) {
  const {customerName, overdraftLimit, type} = props
  const [accountNumber, setAccountNumber] = useState(0);
  const [balance, setBalance] = useState(props.balance || 0);
  const [error, setError] = useState('')

  function generateAccountNumber() {
    if(!accountNumber) {
        let num = 100000 + Math.floor(Math.random() * 1000000);
        setAccountNumber(num) ;
    }else return null
  }

  function deposit(amount) {
    setBalance(balance + amount);
    if( balance >= 0) setError('')
    console.log(balance - overdraftLimit)
    if(type === 'Current' && balance >= 0 - overdraftLimit) setError('')
  }

  function withdraw(amount) {
    if (type !== 'Current' && amount > balance) {
        console.log('current')
      setError('Insufficient funds')
      return;
    }
    if(type === 'Current' && balance <= 0 - overdraftLimit) {
        setError('over limit')
        return;
    }

    setBalance(balance - amount);
  }

  generateAccountNumber()

  return (
    <div>
      <h1>{type} account</h1>
      <p>Customer Name: {customerName}</p>
      <p>Account Number: {accountNumber}</p>
      <p>Balance: £{balance.toFixed(2)}</p>
      <button onClick={() => deposit(1)}>Deposit £1</button>
      <button onClick={() => withdraw(1)}>Withdraw £1</button>
      {error && <h1 style={{color: 'red'}}>{error}</h1>}
    </div>
  );
}

export default BankAccount;

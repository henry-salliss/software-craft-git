import { useState } from "react";

// SavingsAccount component
function SavingsAccount(props) {
    const {overdraftLimit, type} = props
    const [interestRate, setInterestRate] = useState(0);
    const [balance, setBalance] = useState(0)
    const [error, setError] = useState(0)
    function addInterest() {
        console.log('interest: ', interestRate)
      let newBalance = balance + (balance * interestRate);
      setBalance(newBalance);
    }

    function deposit(amount) {
        setBalance(balance + amount);
        if( balance >= 0) setError('')
        if(type === 'Current' && balance >= 0 - overdraftLimit) setError('')
      }
    
      function withdraw(amount) {
        if (type !== 'Current' && amount > balance) {
          setError('Insufficient funds')
          return;
        }
        if(type === 'Current' && balance <= 0 - overdraftLimit) {
            setError('over limit')
        }
    
        setBalance(balance - amount);
      }
  
    return (
      <div style={{display: 'flex', flexDirection: 'column', width: '200px', justifyContent: 'center', margin: 'auto'}}>
        <h1>Savings account</h1>
        <p>Balance: £{balance.toFixed(2)}</p>
        <label>Set interest rate</label>
        <input type={'number'} step={0.05} onChange={(e) => setInterestRate(e.target.value)}/>
        <button onClick={addInterest}>Add Interest</button>
        <button onClick={() => deposit(1)}>Deposit £1</button>
        <button onClick={() => withdraw(1)}>Withdraw £1</button>
        {error && <h1 style={{color: 'red'}}>{error}</h1>}
      </div>
    );
  }


  export default SavingsAccount
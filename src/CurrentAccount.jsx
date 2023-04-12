import BankAccount from "./BankAccount";
import { useState } from "react";
// CurrentAccount component
function CurrentAccount(props) {
    const [overdraftLimit, setOverdraftLimit] = useState(props.overdraftLimit || 0);
    const [balance, setBalance] = useState(0)
  
    function withdraw(amount) {
      if (amount > balance + overdraftLimit) {
        console.log('Cannot withdraw beyond overdraft limit');
        return;
      }
  
      setBalance(balance - amount);
    }
  
    return (
      <div>
        <BankAccount {...props} withdraw={withdraw} overdraftLimit={overdraftLimit} type='Current'/>
        <input type={'number'} onChange={(e) => setOverdraftLimit(e.target.value)}/>
        <p>Overdraft limit: {overdraftLimit}</p>
      </div>
    );
  }

  export default CurrentAccount
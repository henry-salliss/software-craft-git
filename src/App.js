import './App.css';
import BankAccount from './BankAccount';
import CurrentAccount from './CurrentAccount';
import SavingsAccount from './SavingsAccount';

function App() {
  return (
    <div className="App">
      <BankAccount type='Normal' customerName='Henry'/>
      <CurrentAccount customerName='Bob'/>
      <SavingsAccount type='Savings' customerName='John'/>
    </div>
  );
}

export default App;

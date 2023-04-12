import "./App.css";
import BankAccount from "./BankAccount";
import CurrentAccount from "./CurrentAccount";
import SavingsAccount from "./SavingsAccount";

function App() {
  return (
    <div className="App">
      <div class="grid-container">
        <div class="grid-item">
        <BankAccount type="Normal" customerName="Henry" />
        </div>
        <div class="grid-item">
        <CurrentAccount customerName="Bob" />
        </div>
        <div class="grid-item">
        <SavingsAccount type="Savings" customerName="John" />
        </div>
      </div>
    </div>
  );
}

export default App;

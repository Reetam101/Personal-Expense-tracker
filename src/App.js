import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css'

import { GlobalProvider } from './context/GlobalState';
import { DeleteAll } from './components/DeleteAll';

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        <DeleteAll />
      </div>
    </GlobalProvider>
  );
}

export default App;

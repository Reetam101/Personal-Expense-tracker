import { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalState';

import { Transaction } from './Transaction';

export const TransactionList = () => {
    const { transactions, getTransactions } = useContext(GlobalContext);

    useEffect(() => {
        getTransactions();
        // eslint-disabled-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
          <h3>History</h3>
          <ul className="list">
              {transactions.map(transaction => (<Transaction transaction={transaction} key={transaction.id} />))}
          </ul>  
        </>
    )
}

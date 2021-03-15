import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState'

export const DeleteAll = () => {
    const { deleteAllTransactions } = useContext(GlobalContext);
    const handleSubmit = () => {
        deleteAllTransactions();
    }
    return (
        <form onSubmit={handleSubmit}>
            <button className="delete-all-btn">Delete all</button>
        </form>
    )
}

export default (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload) 
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }    
        // New stuff that I added
        case 'DELETE_ALL_TRANSACTIONS':
            return {
                ...state,
                transactions: []
            }    
        default:
            return state;
    }
}
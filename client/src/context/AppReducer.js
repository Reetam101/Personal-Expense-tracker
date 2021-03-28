// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
    switch(action.type) {
        case 'GET TRANSACTIONS':
            return {
                ...state,
                loading: false,
                transactions: action.payload
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload) 
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            }    
        // New stuff that I added
        case 'DELETE_ALL_TRANSACTIONS':
            return {
                ...state,
                transactions: []
            }  
        case 'TRANSACTION ERROR':
            return {
                ...state,
                error: action.payload
            }      
        default:
            return state;
    }
}
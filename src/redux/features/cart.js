const initialState = {
    products: [],
    loading: false,
    error: null,
}

const carts = (state = initialState, action) => {
    switch (action.type) {


    case 'addFakeDataBase' :
        return {
            ...state, 
            products: [...action.payload]
        }
    default:
    return state
    }    
}

export default carts;

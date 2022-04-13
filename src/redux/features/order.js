const initialState = {
    orders: [],
    loading: false,
    error: null
}

export default function order(state = initialState, action) {
    switch (action.type) {
        case "order/fetch/pending": return {
            ...state,
            loading: true,
            error: null
        };
        case "order/fetch/rejected": return {
            ...state,
            loading: false,
            error: action.error
        };
        case "order/fetch/fulfilled": return {
            ...state,
            loading: false,
            error: null,
            orders: action.payload
        };
        
        default: return state
    }
}

export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch({type: "order/fetch/pending"});
        try {
            const res = await fetch("http://localhost:4000/orders");
            const json = await res.json();
            if (json.error) {
                dispatch({type: "order/fetch/rejected", error: json.error})
            } else {
                dispatch({type: "order/fetch/fulfilled", payload: json})
            }
        } catch (e) {
            dispatch({type: "order/fetch/rejected", error: e.toString()})
        }
    }
}
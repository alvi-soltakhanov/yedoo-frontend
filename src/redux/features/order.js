const initialState = {
    loading: false,
    error: null,
    message: null,
    orders: [],
}

export default function order(state = initialState, action) {
    switch (action.type) {

        case 'createOrder/fetch/pending':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'createOrder/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'createOrder/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                message: action.payload
            };

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
        default:
            return state
    }
}

export const createOrder = (foods, currentCafeId, total, from, to) => {
    return async (dispatch) => {
        dispatch({ type: 'order/fetch/pending' })
        const res = await fetch('http://localhost:4000/orders', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                foods: foods,
                cafeId: currentCafeId,
                total: total,
                from: from,
                to: to
            })
        })

        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "order/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "order/fetch/fulfilled", payload: json });
        }
    }
}
export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch({ type: "order/fetch/pending" });
        try {
            const res = await fetch("http://localhost:4000/orders");
            const json = await res.json();
            if (json.error) {
                dispatch({ type: "order/fetch/rejected", error: json.error })
            } else {
                dispatch({ type: "order/fetch/fulfilled", payload: json })
            }
        } catch (e) {
            dispatch({ type: "order/fetch/rejected", error: e.toString() })
        }
    }
}
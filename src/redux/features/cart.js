const initialState = {
    foods: [],
    loading: false,
    error: null,
}

export default function cart(state = initialState, action) {
    switch (action.type) {
        case "cart/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'cart/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'cart/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                foods: action.payload
            };
        case "addFood/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'addFood/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'addFood/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                foods: action.payload
            };
        default:
            return state
    }
}

export const getCurrentCart = (cartId) => {
    return async (dispatch) => {
        dispatch({ type: 'cart/fetch/pending' })
        const res = await fetch(`http://localhost:4000/carts/food/${cartId}`)
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "cart/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "cart/fetch/fulfilled", payload: json.foods });
        }
    }
}

export const createCart = (id) => {
    return async (dispatch) => {
        dispatch({ type: 'cart/fetch/pending' })
        const res = await fetch('http://localhost:4000/carts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ foodId: id })
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "cart/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "cart/fetch/fulfilled", payload: json.foods });
            localStorage.setItem('cartId', json._id)
        }
    }
};

export const addFood = (cartId, id) => {
    return async (dispatch) => {
        dispatch({ type: 'addFood/fetch/pending' })
        // console.log(cartId)
        const res = await fetch(`http://localhost:4000/carts/add/${cartId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ foodId: id })
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "addFood/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "addFood/fetch/fulfilled", payload: json.foods });
        }
    }
}


export const foodCount = (cartId, id, count) => {
    return async (dispatch) => {
        dispatch({ type: 'addFood/fetch/pending' })
        // console.log(cartId)
        const res = await fetch(`http://localhost:4000/carts/one/${cartId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ foodId: id, count })
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "addFood/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "addFood/fetch/fulfilled", payload: json.foods });
        }
    }
}

export const foodRemove = (cartId, id) => {
    return async (dispatch) => {
        dispatch({ type: 'addFood/fetch/pending' })
        // console.log(cartId)
        const res = await fetch(`http://localhost:4000/carts/remove/${cartId}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ foodId: id})
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "addFood/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "addFood/fetch/fulfilled", payload: json.foods });
        }
    }
}
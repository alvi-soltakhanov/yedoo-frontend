const initialState = {
    foods: [],
    cafeId: null,
    total: null,
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
                foods: action.payload.foods,
                cafeId: action.payload.cafeId
            };

            //----------------------------------------------------

        case "create/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'create/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'create/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                foods: action.payload.foods,
                cafeId: action.payload.cafeId
            };

            //------------------------------------------------------

        case "removeCart/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case 'removeCart/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case 'removeCart/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                foods: [],
                cafeId: null,
            };

        //------------------------------------------------
        case 'addTotal/fetch/fulfilled':
            return {
                ...state,
                total: action.payload
            }
        //------------------------------------------------
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
            dispatch({ type: "cart/fetch/fulfilled", payload: { foods: json.foods, cafeId: json.cafeId } });
        }
    }
}

export const createCart = (id, cafeId) => {
    return async (dispatch) => {
        dispatch({ type: 'create/fetch/pending' })
        const res = await fetch('http://localhost:4000/carts', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ foodId: id, cafeId: cafeId })
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "create/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "create/fetch/fulfilled", payload: { foods: json.foods, cafeId: json.cafeId } });
            localStorage.setItem('cartId', json._id)
        }
    }
};

export const addFoodToCart = (cartId, id) => {
    return async (dispatch) => {
        dispatch({ type: 'cart/fetch/pending' })
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
                type: "cart/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "cart/fetch/fulfilled", payload: { foods: json.foods, cafeId: json.cafeId } });
        }
    }
}


export const foodCount = (cartId, id, count) => {
    return async (dispatch) => {
        dispatch({ type: 'cart/fetch/pending' })
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
                type: "cart/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "cart/fetch/fulfilled", payload: { foods: json.foods, cafeId: json.cafeId } });
        }
    }
}

export const foodRemove = (cartId, id) => {
    return async (dispatch) => {
        dispatch({ type: 'cart/fetch/pending' })
        // console.log(cartId)
        const res = await fetch(`http://localhost:4000/carts/remove/${cartId}`, {
            method: "PATCH",
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
            dispatch({ type: "cart/fetch/fulfilled", payload: { foods: json.foods, cafeId: json.cafeId } });
        }
    }
}

export const addTotal = (total) => {
    return (dispatch) => {
        dispatch({ type: 'addTotal/fetch/fulfilled', payload: total })
    }
}

export const cartRemove = (cartId) => {
    return async (dispatch) => {
        dispatch({ type: 'removeCart/fetch/pending' })
        const res = await fetch(`http://localhost:4000/carts/${cartId}`, {
            method: "DELETE"
        })
        const json = await res.json()

        if (json.error) {
            dispatch({
                type: "removeCart/fetch/rejected",
                error: json.error,
            });
        } else {
            dispatch({ type: "removeCart/fetch/fulfilled", payload: json });

        }
    }
}
const initialState = {
    loading: false,
    error: null,
    categories: []
}

export default function categories(state = initialState, action) {
    switch (action.type) {
        case 'categories/fetch/pending':
            return {
                ...state,
                loading: true,
                error: null,
                categories: []
            };
        case 'categories/fetch/rejected':
            return {
                ...state,
                loading: false,
                error: action.error
            };
        case 'categories/fetch/fulfilled':
            return {
                ...state,
                loading: false,
                error: false,
                categories: action.payload
            }
        default:
            return state
    }
}

export const fetchCategories = () => {
    return async (dispatch) => {
        dispatch({ type: 'categories/fetch/pending' })
        const res = await fetch('http://localhost:4000/categories')
        const json = await res.json()
        if (json.error) {
            dispatch({
                type: "categories/fetch/rejected",
                error: json.error,
            });
        } else {
            dispatch({ type: "categories/fetch/fulfilled", payload: json });
        }
    }
}
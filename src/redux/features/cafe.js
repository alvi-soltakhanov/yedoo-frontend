const initialState = {
    loading: false,
    error: null,
    cafe: null,
    cafeById: null
};

export default function cafe(state = initialState, action) {
    switch (action.type) {
        case "cafe/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "cafe/fetch/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "cafe/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                cafe: action.payload
            };
        case "cafeById/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "cafeById/fetch/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "cafeById/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                cafeById: action.payload
            };
        default:
            return state;
    }
}

export const fetchCafe = () => {
    return async (dispatch) => {
        dispatch({ type: "cafe/fetch/pending" });
        try {
            const res = await fetch("http://localhost:4000/cafe");
            const json = await res.json();
            if (json.error) {
                dispatch({
                    type: "cafe/fetch/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "cafe/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "cafe/fetch/rejected", error: e.toString() });
        }
    };
};

export const fetchCafeById = (cafeId) => {
    return async (dispatch) => {
        dispatch({ type: "cafeById/fetch/pending" });
        try {
        const res = await fetch(`http://localhost:4000/cafe/${cafeId}`);
            const json = await res.json();
            if (json.error) {
                dispatch({
                    type: "cafeById/fetch/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "cafeById/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "cafeById/fetch/rejected", error: e.toString() });
        }
    };
}
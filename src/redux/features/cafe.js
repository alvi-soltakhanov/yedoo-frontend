const initialState = {
    loading: false,
    error: null,
    cafe: null,
};

export default function cafe(state = initialState, action) {
    switch (action.type) {
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
                cafe: action.payload
            };
        default:
            return state;
    }
}

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
};

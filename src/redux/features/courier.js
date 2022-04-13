const initialState = {
    loading: false,
    error: null,
    courier: null,
};

export default function courier(state = initialState, action) {
    switch (action.type) {
        case "courierByToken/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "courierByToken/fetch/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "courierByToken/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                courier: action.payload,

            };
        
        default:
            return state;
    }
}

export const fetchCourierByToken = () => {
    return async (dispatch) => {
        dispatch({ type: "courierByToken/fetch/pending" });
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("http://localhost:4000/couriers/profile/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.error) {
                dispatch({
                    type: "courierByToken/fetch/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "courierByToken/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "courierByToken/fetch/rejected", error: e.toString() });
        }
    };
};
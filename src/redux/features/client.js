const initialState = {
    loading: false,
    error: null,
    client: null,
};

export default function client(state = initialState, action) {
    switch (action.type) {
        case "clientByToken/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "clientByToken/fetch/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "clientByToken/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                client: action.payload,

            };
        
        default:
            return state;
    }
}

export const fetchClientByToken = () => {
    return async (dispatch) => {
        dispatch({ type: "clientByToken/fetch/pending" });
        const token = localStorage.getItem('token');
        try {
            const res = await fetch("http://localhost:4000/clients/profile/user", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.error) {
                dispatch({
                    type: "clientByToken/fetch/rejected",
                    error: json.error,
                });
            } else {
                console.log(json);
                dispatch({ type: "clientByToken/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "cafe/fetch/rejected", error: e.toString() });
        }
    };
};
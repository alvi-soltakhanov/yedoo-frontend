const initialState = {
    loading: false,
    error: null,
    cafe: null,
    cafeById: null,
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
                cafe: action.payload,

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
                cafeById: action.payload,
            };
        case "cafe/edit/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "cafe/edit/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "cafe/edit/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                cafe: state.cafe.map((cafe) => {
                    if (cafe._id === action.payload._id) {
                        cafe = action.payload;
                    }
                    return cafe;
                }),
            };
            case "cafeByToken/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "cafeByToken/fetch/rejected":
            return {
                ...state,
                loading: true,
                error: action.error,
            };
        case "cafeByToken/fetch/fulfilled":
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
                console.log(json);
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
};

export const fetchCafeByToken = () => {
    return async (dispatch) => {
        dispatch({ type: "cafeByToken/fetch/pending" });
        const token = localStorage.getItem('token');
        try {
            const res = await fetch(`http://localhost:4000/cafe/profile/user`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const json = await res.json();
            if (json.error) {
                dispatch({
                    type: "cafeByToken/fetch/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "cafeByToken/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "cafeByToken/fetch/rejected", error: e.toString() });
        }
    };
};

export const editCafe = (cafeName, cafeLogo, phone, mail, address, info) => {
    return async (dispatch) => {
        dispatch({ type: "cafe/edit/pending" });
        const token = localStorage.getItem('token');
        const formData = new FormData();
        cafeName && formData.append('name', cafeName);
        phone && formData.append('phone', phone);
        cafeLogo && formData.append('image', cafeLogo);
        mail && formData.append('mail', mail);
        address && formData.append('address', address);
        
        try {
            const res = await fetch(`http://localhost:4000/cafe/edit`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData
            });
            const json = await res.json();
            if (json.error) {
                dispatch({type: "cafe/edit/rejected", error: json.error});
            } else {
                dispatch({type: "cafe/edit/fulfilled", error: json.error});
            }
        } catch (e) {
            dispatch({type: "cafe/edit/rejected", error: e.toString()})
        }
    };
};

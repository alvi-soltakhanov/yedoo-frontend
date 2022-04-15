const initialState = {
    loading: false,
    error: null,
    message: null,
    orders: [],
};

export default function order(state = initialState, action) {
    switch (action.type) {
        case "createOrder/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "createOrder/fetch/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "createOrder/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                message: action.payload,
            };

        case "order/fetch/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "order/fetch/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "order/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: null,
                orders: action.payload,
            };
        case "order/accept/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "order/accept/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "order/accept/fulfilled":
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                orders: state.orders.map((order) => {
                    if (order._id === action.payload._id) {
                        order.courierId = action.payload.courierId;
                    }
                    return order;
                }),
            };
            case "order/delivered/pending":
            return {
                ...state,
                loading: true,
                error: null,
            };
        case "order/delivered/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "order/delivered/fulfilled":
            console.log(action.payload);
            return {
                ...state,
                loading: false,
                error: null,
                orders: state.orders.map((order) => {
                    if (order._id === action.payload._id) {
                        delete order.courierId
                    }
                    return order;
                }),
            };
        case "order/disavailable":
            return {
                ...state,
                orders: state.orders.map((order) => {
                    order.disavailable = true;
                    return order;
                }),
            };
        case "order/available":
            return {
                ...state,
                orders: state.orders.map((order) => {
                    order.disavailable = false;
                    return order;
                }),
            };
        default:
            return state;
    }
}

export const createOrder = (foods, currentCafeId, total, from, to) => {
    return async (dispatch) => {
        dispatch({ type: "createOrder/fetch/pending" });
        const res = await fetch("http://localhost:4000/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                foods: foods,
                cafeId: currentCafeId,
                total: total,
                from: from,
                to: to,
            }),
        });

        const json = await res.json();

        if (json.error) {
            dispatch({
                type: "createOrder/fetch/rejected",
                error: json.error,
            });
        } else {
            // console.log(json);
            dispatch({ type: "createOrder/fetch/fulfilled", payload: json });
        }
    };
};

export const fetchOrders = () => {
    return async (dispatch) => {
        dispatch({ type: "order/fetch/pending" });
        try {
            const res = await fetch("http://localhost:4000/orders");
            const json = await res.json();
            if (json.error) {
                dispatch({ type: "order/fetch/rejected", error: json.error });
            } else {
                dispatch({ type: "order/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "order/fetch/rejected", error: e.toString() });
        }
    };
};

export const acceptOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: "order/accept/pending" });
        try {
            const res = await fetch(`http://localhost:4000/orders/${orderId}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const json = await res.json();
            console.log(json);
            if (json.error) {
                dispatch({ type: "order/accept/rejected", error: json.error });
            } else {
                dispatch({ type: "order/accept/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "order/accept/rejected", error: e.toString() });
        }
    };
};

export const deliverOrder = (orderId) => {
    return async (dispatch) => {
        dispatch({ type: "order/delivered/pending" });
        try {
            const res = await fetch(`http://localhost:4000/orders/${orderId}/delivered`, {
                method: "PATCH",
            });
            const json = await res.json();
            console.log(json);
            if (json.error) {
                dispatch({
                    type: "order/delivered/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "order/delivered/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "order/delivered/rejected", error: e.toString() });
        }
    };
};

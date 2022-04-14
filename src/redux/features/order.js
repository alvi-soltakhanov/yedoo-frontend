const initialState = {
  loading: false,
  error: null,
  message: null,
  orders: [],
  oneOrder: {}
};

export default function order(state = initialState, action) {
  switch (action.type) {
    case "createOrder/fetch/pending":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "createOrder/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case "createOrder/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        message: action.payload
      };

    case "order/fetch/pending":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "order/fetch/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case "order/fetch/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        orders: action.payload
      };
    case "order/fetchOne/pending":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "order/fetchOne/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case "order/fetchOne/fulfilled":
      return {
        ...state,
        loading: false,
        error: null,
        oneOrder: action.payload
      };
    case "order/accept/pending":
      return {
        ...state,
        loading: true,
        error: null
      };
    case "order/accept/rejected":
      return {
        ...state,
        loading: false,
        error: action.error
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
        })
      };
    default:
      return state;
  }
}

export const createOrder = (foods, currentCafeId, total, from, to) => {
  return async (dispatch) => {
    dispatch({ type: "order/fetch/pending" });
    const res = await fetch("http://localhost:4000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        foods: foods,
        cafeId: currentCafeId,
        total: total,
        from: from,
        to: to
      })
    });

    const json = await res.json();

    if (json.error) {
      dispatch({
        type: "order/fetch/rejected",
        error: json.error
      });
    } else {
      // console.log(json);
      dispatch({ type: "order/fetch/fulfilled", payload: json });
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

export const fetchOneOrder = (id) => {
  return async (dispatch) => {
    dispatch({ type: "order/fetchOne/pending" });
    try {
      const res = await fetch(`http://localhost:4000/orders/${id}`);
      const json = await res.json();
      if (json.error) {
        dispatch({ type: "order/fetchOne/rejected", error: json.error });
      } else {
        dispatch({ type: "order/fetchOne/fulfilled", payload: json });
      }
    } catch (e) {
      dispatch({ type: "order/fetchOne/rejected", error: e.toString() });
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
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      const json = await res.json();
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

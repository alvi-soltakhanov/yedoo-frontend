const initialState = {
    loading: false,
    error: null,
    food: [],
};

export default function food(state = initialState, action) {
    switch (action.type) {
        case "food/fetch/pending":
            return {
                ...state,
                loading: true,
                error: false,
            };
        case "food/fetch/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "food/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: false,
                food: action.payload,
            };
            case "addFood/fetch/pending":
                return {
                    ...state,
                    loading: true,
                    error: false,
                };
            case "addFood/fetch/rejected":
                return {
                    ...state,
                    loading: false,
                    error: action.error,
                };
            case "addFood/fetch/fulfilled":
                return {
                    ...state,
                    loading: false,
                    error: false,
                    food: [...state.food, action.payload],
                };
                case "changeFood/fetch/pending":
                    return {
                        ...state,
                        loading: true,
                        error: false,
                    };
                case "changeFood/fetch/rejected":
                    return {
                        ...state,
                        loading: false,
                        error: action.error,
                    };
                case "changeFood/fetch/fulfilled":
                    return {
                        ...state,
                        loading: false,
                        error: false,
                        food: state.food.map(food => {
                            if (action.payload.id === food._id) {
                                food.name = action.payload.name;
                                food.image = action.payload.image;
                                food.price = action.payload.price;
                                food.category = action.payload.category
                            }
                            return food;
                        })
                    };
        default:
            return state;
    }
}

export const fetchFood = () => {
    return async (dispatch) => {
        dispatch({ type: "food/fetch/pending" });
        try {
            const res = await fetch("http://localhost:4000/food");
            const json = await res.json();
            if (json.error) {
                dispatch({ type: "food/fetch/rejected", error: json.error });
            } else {
                dispatch({ type: "food/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "food/fetch/rejected", error: e.toString() });
        }
    };
};

export const addFood = (food, composition, category, price, image) => {
    return async (dispatch) => {
        dispatch({ type: "addFood/fetch/pending" });
        const formData = new FormData();
        formData.append("image", image[0]);
        formData.append("food", food);
        formData.append("composition", composition);
        formData.append("category", category);
        formData.append("price", price);
        try {
            const res = await fetch("http://localhost:4000/food", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: formData
            });
            const json = await res.json();
            console.log(json);
            if (json.error) {
                dispatch({ type: "addFood/fetch/rejected", error: json.error });
            } else {
                dispatch({ type: "addFood/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "addFood/fetch/rejected", error: e.toString() });
        }
    };
}

export const changeFood = (id, food, composition, category, price, image) => {
    return async (dispatch) => {
        dispatch({ type: "changeFood/fetch/pending" });
        const formData = new FormData();
        formData.append("image", image[0]);
        formData.append("food", food);
        formData.append("composition", composition);
        formData.append("category", category);
        formData.append("price", price);
        try {
            const res = await fetch(`http://localhost:4000/food/${id}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                },
                body: formData
            });
            const json = await res.json();
            console.log(json);
            if (json.error) {
                dispatch({ type: "changeFood/fetch/rejected", error: json.error });
            } else {
                dispatch({ type: "changeFood/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({ type: "changeFood/fetch/rejected", error: e.toString() });
        }
    };
}

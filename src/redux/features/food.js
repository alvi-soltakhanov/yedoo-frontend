const initialState = {
    loading: false,
    error: null,
    food: [],
    foodByCafe: [],
};

export default function food(state = initialState, action) {
    switch (action.type) {
        case "food/fetch/pending":
            return {
                ...state,
                loading: true,
                error: false,
                food: null,
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
        case "foodByCafe/fetch/pending":
            return {
                ...state,
                loading: true,
                error: false,
                foodByCafe: null,
            };
        case "foodByCafe/fetch/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "foodByCafe/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: false,
                foodByCafe: action.payload,
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
        case "editFood/fetch/pending":
            return {
                ...state,
                loading: true,
                error: false,
            };
        case "editFood/fetch/rejected":
            return {
                ...state,
                loading: false,
                error: action.error,
            };
        case "editFood/fetch/fulfilled":
            return {
                ...state,
                loading: false,
                error: false,
                food: state.food.map((food) => {
                    if (action.payload.id === food._id) {
                        food.name = action.payload.name;
                        food.image = action.payload.image;
                        food.price = action.payload.price;
                        food.category = action.payload.category;
                    }
                    return food;
                }),
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

export const addFood = (food, composition, price, image, category) => {
    return async (dispatch) => {
        dispatch({ type: "addFood/fetch/pending" });
        const formData = new FormData();
        formData.append("image", image);
        formData.append("name", food);
        formData.append("info", composition);
        formData.append("categoryId", category);
        formData.append("price", price);
        try {
            const res = await fetch("http://localhost:4000/food", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: formData,
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
};

export const editFood = (food, composition, category, price, image) => {
    return async (dispatch) => {
        dispatch({ type: "editFood/fetch/pending" });
        const formData = new FormData();
        if (image) {
            formData.append("image", image[0]);
        }
        if (food) {
            formData.append("food", food);
        }
        if (composition) {
            formData.append("info", composition);
        }
        if (category) {
            formData.append("categoryId", category);
        }
        if (image) {
            formData.append("price", price);
        }
        try {
            const res = await fetch(`http://localhost:4000/food/edit}`, {
                method: "PATCH",
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: formData,
            });
            const json = await res.json();
            // console.log(json);
            if (json.error) {
                dispatch({
                    type: "editFood/fetch/rejected",
                    error: json.error,
                });
            } else {
                dispatch({ type: "editFood/fetch/fulfilled", payload: json });
            }
        } catch (e) {
            dispatch({
                type: "editFood/fetch/rejected",
                error: e.toString(),
            });
        }
    };
};

export const getFoodByCategory = (categoryId) => {
    return async (dispatch) => {
        dispatch({ type: "food/fetch/pending" });
        const res = await fetch(
            `http://localhost:4000/food/category/${categoryId}`
        );
        const json = await res.json();
        if (json.error) {
            dispatch({ type: "food/fetch/rejected", error: json.error });
        } else {
            dispatch({ type: "food/fetch/fulfilled", payload: json });
        }
    };
};

export const getFoodByCafeToken = () => {
    return async (dispatch) => {
        dispatch({ type: "foodByCafe/fetch/pending" });
        const res = await fetch(`http://localhost:4000/food/cafe/`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        const json = await res.json();
        if (json.error) {
            dispatch({ type: "foodByCafe/fetch/rejected", error: json.error });
        } else {
            dispatch({ type: "foodByCafe/fetch/fulfilled", payload: json });
        }
    };
};

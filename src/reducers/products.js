import { productsAction } from "../actions/products";

export const initialState = {
    error: false,
    loading:true,
    data: {}
}

export function productsReducer (state = initialState, action) {
    switch (action.type) {
        case productsAction.SET_PRODUCT:
            return{
                loading:false,
                error: false,
                data: action.payload
            };
        case productsAction.SET_ERROR:
            return{
                ...initialState,
                error: true,
                loading: false
            };
        default:
            return state;
    }
}
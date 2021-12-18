import axios from "axios";
import { ActionTypes } from "../constants/action-types"

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

export const fetchProducts = () => async (dispatch) => {
        const response = await axios.get('../../../api/cars.json');
        dispatch({type: ActionTypes.FATCH_PRODUCTS, payload: response.data})
}
export const fetchProduct = (data) => async (dispatch) => {
    dispatch({type: ActionTypes.SELECTED_PRODUCT, payload: data})
}
export const removeProduct = () => {
    return {
        type: ActionTypes.REMOVE_SELECTED_PRODUCT,
    }
}

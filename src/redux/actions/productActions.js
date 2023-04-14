import { ActionTypes } from './../constants/actionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (productId) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: productId,
    };
};

export const selectedProductColor = (color) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT_COLOR,
        payload: color,
    };
};
import { ActionTypes } from './../constants/actionTypes';

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectedProduct = (product) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product,
    };
};

export const selectedProductColor = (color) => {
    return {
        type: ActionTypes.SELECTED_PRODUCT_COLOR,
        payload: color,
    };
};
export const selectedDesign = (design) => {
    return {
        type: ActionTypes.SELECTED_DESIGN,
        payload: design,
    };
}; 

export const selectedInputFile = (file) => {
    return {
        type: ActionTypes.SELECTED_INPUT_FILE,
        payload: file,
    };
}; 

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
export const selectedDesignId = (designId) => {
    return {
        type: ActionTypes.DESIGNID,
        payload: designId,
    };
};
export const selectedDesigns = (data) => {
    return {
        type: ActionTypes.ALLDESIGNS,
        payload: data,
    };
};
export const textFocus = (id) => {
    return {
        type: ActionTypes.TEXTFOCUS,
        payload: id,
    };
};
export const selectedInputFile = (file) => {
    return {
        type: ActionTypes.SELECTED_INPUT_FILE,
        payload: file,
    };
};
export const dragged = (data) => {
    return {
        type: ActionTypes.DRAGGED,
        payload: data,
    };
}; 
export const reverseText = (data) => {
    return {
        type: ActionTypes.REVERSETEXT,
        payload: data,
    };
};
export const flipText = (data) => {
    return {
        type: ActionTypes.FLIPTEXT,
        payload: data,
    };
};
export const canvasPosition = (data) => {
    return {
        type: ActionTypes.CANVASPOSITION,
        payload: data,
    };
};
export const designText = (data) => {
    return {
        type: ActionTypes.DESIGNTEXT,
        payload: data,
    };
};
export const productColor = (data) => {
    return {
        type: ActionTypes.PRODUCTCOLOR,
        payload: data,
    };
};
export const imageClip = (data) => {
    return {
        type: ActionTypes.IMAGECLIP,
        payload: data,
    };
};
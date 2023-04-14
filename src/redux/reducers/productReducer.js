import { ActionTypes } from './../constants/actionTypes';
import cottonTshirt from "../../pages/assets/Next Level Cotton Blend T-Shirt.jpg"
import crenwneckTshirt from '../../pages/assets/Next Level Apparel Crewneck T-Shirt.jpg'

const initialState = {
    products: [
        {
            product_Id: 1,
            name: "Next Level Cotton Blend T-Shirt",
            style: 'N6210',
            colors: [
                "rgb(255, 255, 255)",
                "rgb(173, 176, 193)",
                "rgb(0, 0, 0)",
                "rgb(239, 128, 67)",
                "rgb(207, 196, 190)",
            ],
            image: cottonTshirt
        },
        {
            product_Id: 2,
            name: "Next Level Apparel Crewneck T-Shirt",
            style: '3600',
            colors: [
                "rgb(51, 89, 148)",
                "rgb(32, 65, 154)",
                "rgb(216, 236, 242)",
                "rgb(35, 153, 82)",
                "rgb(236, 184, 46)",
            ],
            image: crenwneckTshirt
        },
    ]
};


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProductId: payload };
        case ActionTypes.SELECTED_PRODUCT_COLOR:
            return { ...state, selectedProductColor: payload };
        default:
            return state;
    }
};

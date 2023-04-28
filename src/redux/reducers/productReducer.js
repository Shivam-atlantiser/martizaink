import { ActionTypes } from './../constants/actionTypes';
import cottonTshirt from "../../pages/assets/Next Level Cotton Blend T-Shirt.jpg"
import crenwneckTshirt from '../../pages/assets/Next Level Apparel Crewneck T-Shirt.jpg'
import adobeGrade from '../../pages/assets/adobe grade.png';
import alpha from '../../pages/assets/alpha.png';
import bladeRunner from '../../pages/assets/Blade Runner.png';
import fontStyle from "../../pages/assets/fonts/stylesheet.css"

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
    ],
    fonts: [
        {
            fontFamily: 'Adobe',
            fontImage: adobeGrade,
            link: fontStyle
        },
        {
            fontFamily: 'Alpha',
            fontImage: alpha,
            link: fontStyle
        },
        {
            fontFamily: 'Blade Runner',
            fontImage: bladeRunner,
            link: fontStyle
        },
    ],
    styles: {
        "colors": [
            "rgb(51, 89, 148)",
            "rgb(32, 65, 154)",
            "rgb(216, 236, 242)",
            "rgb(35, 153, 82)",
            "rgb(236, 184, 46)",
            "rgb(255, 255, 255)",
            "rgb(173, 176, 193)",
            "rgb(0, 0, 0)",
            "rgb(239, 128, 67)",
            "rgb(207, 196, 190)",
        ]
        ,
        "outline": {
            "sizes": [
                "1px", "2px", "3px", "4px", "5px", "6px", "7px", "8px", "9px", "10px", "11px", "12px", "13px", "14px", "15px", "16px", "17px", "18px", "19px", "20px"
            ],
            "colors": [
                "unset",
                "rgb(51, 89, 148)",
                "rgb(32, 65, 154)",
                "rgb(216, 236, 242)",
                "rgb(35, 153, 82)",
                "rgb(236, 184, 46)",
                "rgb(255, 255, 255)",
                "rgb(173, 176, 193)",
                "rgb(0, 0, 0)",
                "rgb(239, 128, 67)",
                "rgb(207, 196, 190)",
            ]
        }
    }
};


export const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };
        case ActionTypes.SELECTED_INPUT_FILE:
            return { ...state, selectedInputFile: payload };
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, selectedProduct: payload };
        case ActionTypes.SELECTED_PRODUCT_COLOR:
            return { ...state, selectedProductColor: payload };
        case ActionTypes.SELECTED_DESIGN:
            return { ...state, selectedDesign: payload };
        case ActionTypes.DESIGNID:
            return { ...state, selectedDesignId: payload };
        case ActionTypes.TEXTFOCUS:
            return { ...state, textFocus: payload };
        case ActionTypes.ALLDESIGNS:
            return { ...state, selectedDesigns: payload };
        case ActionTypes.DRAGGED:
            return { ...state, dragged: payload };
        case ActionTypes.REVERSETEXT:
            return { ...state, reverseText: payload };
        case ActionTypes.FLIPTEXT:
            return { ...state, flipText: payload };
        default:
            return state;
    }
};

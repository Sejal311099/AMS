import * as types from '../ActionTypes/productActionTypes';

const initialState = {
    productss: [],
    singleProduct: [],
}

const productReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.LOAD_PRODUCTS_START:
        case types.ADD_NEW_PRODUCT_START:
        case types.UPDATE_PRODUCT_START:
        case types.GET_SINGLE_PRODUCT_START:
        case types.DELETE_PRODUCT_START:
            return {
                ...state,
            };
        case types.LOAD_PRODUCTS_SUCCESS:
            return {
                ...state,
                productss: action.payload,
            }
        case types.GET_SINGLE_PRODUCT_SUCCESS:
            return {
                ...state,
                singleProduct: action.payload,
            }
        case types.ADD_NEW_PRODUCT_SUCCESS:
        case types.UPDATE_PRODUCT_SUCCESS:
        case types.DELETE_PRODUCT_SUCCESS:
            return {
                ...state,
            }
        case types.LOAD_PRODUCTS_ERROR:
        case types.ADD_NEW_PRODUCT_ERROR:
        case types.UPDATE_PRODUCT_ERROR:
        case types.GET_SINGLE_PRODUCT_ERROR:
        case types.DELETE_PRODUCT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
         default:
            return state;
    }
}

export default productReducer;
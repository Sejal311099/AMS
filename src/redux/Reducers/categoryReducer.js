import * as types from '../ActionTypes/categoryActionTypes';

const initialState = {
    categories: [],
    categoryDetails: [],
    stocks: [],
}

const categoryReducer = (state = initialState, action ) => {
    switch (action.type) {
        case types.LOAD_CATEGORIES_START:
        case types.ADD_NEW_CATEGORY_START:
        case types.UPDATE_CATEGORY_START:
        case types.DELETE_CATEGORY_START:
        case types.CATEGORY_STATUS_CHANGE_START:
        case types.GET_SINGLE_CATEGORY_START:
        case types.LOAD_STOCKS_START:
            return {
                ...state,
            };
        case types.LOAD_CATEGORIES_SUCCESS:
            return {
                ...state,
                categories: action.payload,
            }
        case types.GET_SINGLE_CATEGORY_SUCCESS:
            return {
                ...state,
                categoryDetails: action.payload,
            }
        case types.LOAD_STOCKS_SUCCESS:
            return {
                ...state,
                stocks: action.payload,
            }
        case types.ADD_NEW_CATEGORY_SUCCESS:
        case types.UPDATE_CATEGORY_SUCCESS:
        case types.DELETE_CATEGORY_SUCCESS:
        case types.CATEGORY_STATUS_CHANGE_SUCCESS:
            return {
                ...state,
            }
        case types.LOAD_CATEGORIES_ERROR:
        case types.ADD_NEW_CATEGORY_ERROR:
        case types.UPDATE_CATEGORY_ERROR:
        case types.DELETE_CATEGORY_ERROR:
        case types.CATEGORY_STATUS_CHANGE_ERROR:
        case types.GET_SINGLE_CATEGORY_ERROR:
        case types.LOAD_STOCKS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}

export default categoryReducer;
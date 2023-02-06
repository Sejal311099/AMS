import * as types from '../ActionTypes/comboActionTypes';

export const loadComboStart = () => ({
    type: types.LOAD_COMBO_START,
});

export const loadComboSuccess = (comboData) => ({
    type: types.LOAD_COMBO_SUCCESS,
    payload: comboData,
});

export const loadComboError = (error) => ({
    type: types.LOAD_COMBO_ERROR,
    payload: error,
});

export const getcomboByIdStart = (comboId) => ({
    type: types.GET_SINGLE_COMBO_START,
    payload: comboId,
});

export const getcomboByIdSuccess = (comboId) => ({
    type: types.GET_SINGLE_COMBO_SUCCESS,
    payload: comboId,
});

export const getcomboByIdError = (error) => ({
    type: types.GET_SINGLE_COMBO_ERROR,
    payload: error,
});

export const getItemsByCategoryStart = (items) => ({
    type: types.GET_ITEMS_BY_CATEGORY_START,
    payload: items,
});

export const getItemsByCategorySuccess = (items) => ({
    type : types.GET_ITEMS_BY_CATEGORY_SUCCESS,
    payload: items,
});

export const getItemsByCategoryError = (error) => ({
    type: types.GET_ITEMS_BY_CATEGORY_ERROR,
    payload: error,
});

export const getDeleteComboStart = (comboId)  => ({
    type: types.DELETE_COMBO_START,
    payload: comboId,
});

export const getDeleteComboSuccess = (comboId) => ({
    type: types.DELETE_COMBO_SUCCESS,
    payload: comboId,
});

export const getDeleteComboError = (error) => ({
    type: types.DELETE_COMBO_ERROR,
    payload: error,
});
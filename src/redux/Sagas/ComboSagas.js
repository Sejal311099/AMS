import * as types from "../ActionTypes/comboActionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import Swal from "sweetalert2";

import { 
    deleteComboApi,
    getItembyCategoryApi,
    getSingleComboApi,
    loadComboApi, 
} from '../APIs/comboApi';

import {  
    loadComboSuccess,
    loadComboError,
    getcomboByIdSuccess,
    getcomboByIdError,
    getItemsByCategorySuccess,
    getItemsByCategoryError,
    getDeleteComboSuccess,
    getDeleteComboError,
 
} from '../Actions/comboActions';

const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 4000,
  });

export function* onLoadComboStartAsync() {
    try {
        const response = yield call(loadComboApi)
        if (response.data.status === 200) {
            yield put(loadComboSuccess(response.data.data));
        } 
    } catch (error) {
        yield put(loadComboError(error.response));
    }
}

export function* onGetSingleComboStartAsync({ payload }) {
    try {
        const response = yield call(getSingleComboApi, payload)
        if (response.data.status === 200) {
           yield put(getcomboByIdSuccess(response.data.employeeData));
        }
    } catch (error) {
        yield put(getcomboByIdError(error.response));
    }
}

export function* onGetItemsByCategoryAsync() {
    try {
        const response = yield call(getItembyCategoryApi)
        if(response.data.status === 200) {
           yield put(getItemsByCategorySuccess(response.data.data))
        }
    } catch (error) {
        yield put(getItemsByCategoryError(error.response));
    }
}

export function* onDeleteComboAsync({ payload }) {
    console.log("PAYLOAD~~~~~>>>>>", payload)
    try {
        const response = yield call(deleteComboApi, payload)
        console.log("BEFORE RESPOSNE~~~>>>>", response.data)
        if(response.data.status === 200) {
            console.log("RESPOSNE~~~>>>>", response.data)
            yield put(getDeleteComboSuccess(response.data))
        } else {
            console.log("ERROR RESPOSNE~~~~>>>>", response.data)
        } 
    } catch (error) {
        yield put(getDeleteComboError(error.response));
    }
}

export function* onLoadCombo() {
    yield takeLatest(types.LOAD_COMBO_START, onLoadComboStartAsync);
}
export function* onSingleCombo() {
    yield takeLatest(types.GET_SINGLE_COMBO_START, onGetSingleComboStartAsync);
}

export function* onGetItemsByCombo() {
    yield takeLatest(types.GET_ITEMS_BY_CATEGORY_START, onGetItemsByCategoryAsync);
} 

export function* onDeleteCombo() {
    yield takeLatest(types.DELETE_COMBO_START, onDeleteComboAsync);
}

const comboSagas = [
   fork(onLoadCombo),
   fork(onSingleCombo),
   fork(onGetItemsByCombo),
   fork(onDeleteCombo),
];

export default function* comboSaga() {
yield all([...comboSagas]);
}
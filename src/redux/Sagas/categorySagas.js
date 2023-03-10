import * as types from "../ActionTypes/categoryActionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import Swal from "sweetalert2";

import {
    loadCategoriesSuccess,
    loadCategoriesError,
    addnewCategorySuccess,
    addnewCategoryError,
    updateCategorySuccess,
    updateCategoryError,
    deleteCategorySuccess,
    deleteCategoryError,
    categoryStatusChangeSuccess,
    categoryStatusChangeError,
    getSingleCategorySuccess,
    getSingleCategoryError,
    loadStocksSuccess,
    loadStocksError
} from '../Actions/categoryActions';

import {
    loadCategoryApi,
    addNewCategoryApi,
    updateCategoryApi,
    deleteCategoryApi,
    changeStatusApi,
    getSingleCategoryApi,
    loadStocksApi,
} from '../APIs/categoryApi';


const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 2000,
  });

export function* onLoadCategoryStartAsync() {
   try {
        const response = yield call(loadCategoryApi)
        if (response.data.success === true) {
            yield put(loadCategoriesSuccess(response.data));
        } 
   } catch (error) {
        yield put(loadCategoriesError(error.response));
   }
}

export function* onAddNewCategoryStartAsync({ payload }) {
    try {
        const response = yield call(addNewCategoryApi, payload)
        if (response.data.success === true) {
            yield put(addnewCategorySuccess(response.data));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
                Toast.fire({
                    icon: "error",
                    title: response.data.message,
                })  
        }
    } catch (error) {
        yield put(addnewCategoryError(error.response));
    }
}

export function* onUpdateCategoryStartAsync({ payload }) {
    try {
        const response = yield call(updateCategoryApi, payload)
        
        if (response.data.success === true) {
            yield put(updateCategorySuccess(response.data));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.errors.category_name,
            });
        }
    } catch (error) {
        yield put(updateCategoryError(error.response));
    }
}

export function* onDeleteCategoryStartAsync({ payload }) {
    try {
        const response = yield call(deleteCategoryApi, payload)
        if (response.data.success === true) {
            yield put(deleteCategorySuccess(response.data));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message,
            });
        }
    } catch (error) {
        yield put(deleteCategoryError(error.response));
    }
}

export function* onCategoryStatusStartAsync({payload}) {
    try {
        const response = yield call(changeStatusApi, payload)
        if (response.data.success === true) {
            yield put(categoryStatusChangeSuccess(response.data));
            Toast.fire({
                icon: "success",
                title: response.data.message,
            });
        } else {
            Toast.fire({
                icon: "error",
                title: response.data.message,
            });
        }
    } catch (error) {
        yield put(categoryStatusChangeError(error.response));
    }
}

export function* onGetSingleCategoryStartAsync({ payload }) {
    try {
        const response = yield call(getSingleCategoryApi, payload)
        if (response.data.success === true) {
            yield put(getSingleCategorySuccess(response.data.categoryData));
        }
    } catch (error) {
        yield put(getSingleCategoryError(error.response));
    }
}

export function* onLoadStocksStartAsync() {
    try {
        const response = yield call(loadStocksApi)
       
        if (response.data.success === true) {
            yield put(loadStocksSuccess, response.data)
        }
    } catch (error) {
        yield put(loadStocksError(error.response));
    }
}

export function* onLoadCategory() {
    yield takeLatest(types.LOAD_CATEGORIES_START, onLoadCategoryStartAsync);
}

export function* onAddNewCategory() {
    yield takeLatest(types.ADD_NEW_CATEGORY_START, onAddNewCategoryStartAsync);
}

export function* onUpdateCategory() {
    yield takeLatest(types.UPDATE_CATEGORY_START, onUpdateCategoryStartAsync);
}

export function* onDeleteCategory() {
    yield takeLatest(types.DELETE_CATEGORY_START, onDeleteCategoryStartAsync);
}

export function* onStatusChange() {
    yield takeLatest(types.CATEGORY_STATUS_CHANGE_START, onCategoryStatusStartAsync);
}

export function* onSingleCategory() {
    yield takeLatest(types.GET_SINGLE_CATEGORY_START, onGetSingleCategoryStartAsync);
}

export function* onLoadStocksStart() {
    yield takeLatest(types.LOAD_STOCKS_START, onLoadStocksStartAsync)
}

const categorySagas = [
    fork(onLoadCategory),
    fork(onAddNewCategory),
    fork(onUpdateCategory),
    fork(onDeleteCategory),
    fork(onStatusChange),
    fork(onSingleCategory),
    fork(onLoadStocksStart),
];

export default function* categorySaga() {
    yield all([...categorySagas]);
    }
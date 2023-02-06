import * as types from '../ActionTypes/actionTypes';

const initialState = {
    loginData: [],
    users: [],
    singleUser: [],
    changePass: [],
    singleUserAssignment: [],
}

const usersReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.LOAD_USERS_START:
        case types.ADMIN_LOGIN_START:
        case types.ADMIN_CHANGE_PASSWORD_START:
        case types.ADMIN_LOGOUT_START:
        case types.ADD_NEW_EMPLOYEE_START:
        case types.UPDATE_EMPLOYEE_START:
        case types.DELETE_EMPLOYEE_START:
        case types.GET_SINGLE_EMPLOYEE_START:
        case types.GET_SINGLE_EMPLOYEE_ASSIGNMENT_START:
            return {
                ...state,
            };
            case types.LOAD_USERS_SUCCESS:
                return {
                  ...state,
                  users: action.payload,
                };
        case types.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,   
                loginData: action.payload,
            };
        case types.GET_SINGLE_EMPLOYEE_SUCCESS:
            return {
                ...state,
                singleUser: action.payload,
            }
        case types.GET_SINGLE_EMPLOYEE_ASSIGNMENT_SUCCESS:
            return {
                ...state,
                singleUserAssignment: action.payload,
            }
        case types.ADMIN_CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                changePass: action.payload,
            }
        case types.ADMIN_LOGOUT_SUCCESS:
        case types.ADD_NEW_EMPLOYEE_SUCCESS:
        case types.UPDATE_EMPLOYEE_SUCCESS:
        case types.DELETE_EMPLOYEE_SUCCESS:
            return {
                ...state,  
            };
        case types.ADMIN_LOGIN_ERROR:
        case types.ADMIN_CHANGE_PASSWORD_ERROR:
        case types.ADMIN_LOGOUT_ERROR:
        case types.LOAD_USERS_ERROR:
        case types.ADD_NEW_EMPLOYEE_ERROR:
        case types.UPDATE_EMPLOYEE_ERROR:
        case types.DELETE_EMPLOYEE_ERROR:
        case types.GET_SINGLE_EMPLOYEE_ERROR:
        case types.GET_SINGLE_EMPLOYEE_ASSIGNMENT_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default usersReducer;
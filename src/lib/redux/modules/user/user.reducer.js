import {
    USER,
    USER_DATA,
    USER_LIST,
    USER_MAP,
    USER_FAIL,
} from "./user.types";

const userDefaultState = {
    requesting: false,
    data: {},
    list: [],
    map: new Map(),
    error: null
};

export default function userPostReducer(state = userDefaultState, action) {
    switch (action.type) {
        case USER:
            return {
                ...state,
                type: USER,
                requesting: true

            }
        case USER_DATA:
            return {
                ...state,
                type: USER_DATA,
                data: action.data,
                requesting: false
            };
        case USER_LIST:
            return {
                ...state,
                type: USER_LIST,
                list: action.list,
                requesting: false
            };
        case USER_MAP:
            return {
                ...state,
                type: USER_MAP,
                map: action.map
            };
        case USER_FAIL:
            return {
                ...state,
                type: USER_FAIL,
                error: action.error
            };
        default:
            return state;
    }
}
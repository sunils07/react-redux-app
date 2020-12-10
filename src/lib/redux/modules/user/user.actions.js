import {
    USER,
    USER_DATA,
    USER_LIST,
    USER_MAP,
    USER_FAIL,
} from "./user.types";

export function user() {
    return {
        type: USER
    }
}

export function userData(data) {
    return {
        type: USER_DATA,
        data: data,
        requesting: false
    }
}

export function userList(list) {
    return {
        type: USER_LIST,
        list: list,
        requesting: false
    }
}

export function userMap(map) {
    return {
        type: USER_MAP,
        map: map
    }
}

export function userFail(error) {
    return {
        type: USER_FAIL,
        error: error,
        requesting: false
    }
}
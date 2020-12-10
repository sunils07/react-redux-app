import {
    USER_POST,
    USER_POST_DATA,
    USER_POST_LIST,
    USER_POST_COMMENT_DATA,
    USER_POST_COMMENT_LIST,
    USER_POST_FAIL,
} from "./user-post.types";

const userPostDefaultState = {
    requesting: false,
    data: {},
    list: [],
    comments: [],
    error: null
};

export default function userPostReducer(state = userPostDefaultState, action) {
    switch (action.type) {
        case USER_POST:
            return {
                ...state,
                type: USER_POST,
                requesting: true

            }
        case USER_POST_DATA:
            return {
                ...state,
                type: USER_POST_DATA,
                data: action.data,
                requesting: false
            };
        case USER_POST_LIST:
            return {
                ...state,
                type: USER_POST_LIST,
                list: action.list,
                requesting: false
            };
        case USER_POST_COMMENT_DATA:
            return {
                ...state,
                type: USER_POST_COMMENT_DATA,
                comment: action.comment,
                requesting: false
            };
        case USER_POST_COMMENT_LIST:
            return {
                ...state,
                type: USER_POST_COMMENT_LIST,
                comments: action.comments,
                requesting: false
            };
        case USER_POST_FAIL:
            return {
                ...state,
                type: USER_POST_FAIL,
                error: action.error
            };
        default:
            return state;
    }
}
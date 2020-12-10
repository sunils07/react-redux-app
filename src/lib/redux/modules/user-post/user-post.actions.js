import {
    USER_POST,
    USER_POST_DATA,
    USER_POST_LIST,
    USER_POST_COMMENT_DATA,
    USER_POST_COMMENT_LIST,
    USER_POST_FAIL,
} from "./user-post.types";

export function userPost() {
    return {
        type: USER_POST
    }
}

export function userPostData(data) {
    return {
        type: USER_POST_DATA,
        data: data,
        requesting: false
    }
}

export function userPostList(list) {
    return {
        type: USER_POST_LIST,
        list: list,
        requesting: false
    }
}

export function userPostCommentData(comment) {
    return {
        type: USER_POST_COMMENT_DATA,
        comment: comment,
        requesting: false
    }
}

export function userPostCommentList(comments) {
    return {
        type: USER_POST_COMMENT_LIST,
        comments: comments,
        requesting: false
    }
}

export function userPostFail(error) {
    return {
        type: USER_POST_FAIL,
        error: error,
        requesting: false
    }
}
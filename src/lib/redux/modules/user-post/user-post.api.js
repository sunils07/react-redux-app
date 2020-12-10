import axios from "axios";
import {
    userPost,
    userPostData,
    userPostList,
    userPostCommentData,
    userPostCommentList,
    userPostFail
} from "./user-post.actions";

export function userPostApi(url, method, data) {
    return (dispatch) => {
        dispatch(userPost(true));
        return axios({
            url: url,
            method: method,
            data: data
        })
            .then((resp) => {
                Array.isArray(resp.data) ? dispatch(userPostList(resp.data)) : dispatch(userPostData(resp.data));
                return resp;
            })
            .catch((error) => {
                dispatch(userPostFail(error.error));
                return error;
            });
    };
}

export function userPostCommentApi(url, method, data) {
    return (dispatch) => {
        dispatch(userPost(true));
        return axios({
            url: url,
            method: method,
            data: data
        })
            .then((resp) => {
                Array.isArray(resp.data) ? dispatch(userPostCommentList(resp.data)) : dispatch(userPostCommentData(resp.data));
                return resp;
            })
            .catch((error) => {
                dispatch(userPostFail(error.error));
                return error;
            });
    };
}
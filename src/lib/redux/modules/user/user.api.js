import axios from "axios";
import {
    user,
    userData,
    userList,
    userMap,
    userFail
} from "./user.actions";

export function userApi(url, method, data) {
    return (dispatch) => {
        dispatch(user(true));
        return axios({
            url: url,
            method: method,
            data: data
        })
            .then((resp) => {
                if (Array.isArray(resp.data)) {
                    const _userMap = new Map();

                    resp.data.forEach((user) => { // Create user map
                        _userMap.set(user.id, user);
                    });

                    dispatch(userMap(_userMap));
                    dispatch(userList(resp.data));

                } else {
                    dispatch(userData(resp.data));
                }
                return resp;
            })
            .catch((error) => {
                dispatch(userFail(error.error));
                return error;
            });
    };
}
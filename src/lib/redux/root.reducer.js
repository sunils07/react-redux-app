import { combineReducers } from "redux";

import UserReducer from "./modules/user/user.reducer";
import UserPostReducer from "./modules/user-post/user-post.reducer";

const rootReducer = combineReducers({
    User: UserReducer,
    UserPost: UserPostReducer,
});

export default rootReducer;
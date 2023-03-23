import { combineReducers, createStore } from "redux";
import { postReduser } from "./reducer/postReducer";

const rootReducer = combineReducers({
    posts: postReduser
})


export const store =createStore(rootReducer);

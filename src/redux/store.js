import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  deletePostReducer,
  getAllPosts,
  getPost,
} from "./reducers/postReducers";
import { addPostReducer } from "./reducers/postReducers";
import { userLoginReducer, userRegisterReducer } from "./reducers/userReducers";
const initialState = {
  userSignin: {
    userInfor: localStorage.getItem("userInfor")
      ? JSON.parse(localStorage.getItem("userInfor"))
      : null,
  },
};
const reducer = combineReducers({
  userSignin: userLoginReducer,
  userRegister: userRegisterReducer,
  addPost: addPostReducer,
  posts: getAllPosts,
  post: getPost,
  deletePost: deletePostReducer,
});
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;

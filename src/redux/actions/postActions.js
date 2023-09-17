import axios from "axios";
import {
  CREATE_POST_FAIL,
  CREATE_POST_REQUEST,
  CREATE_POST_SUCCESS,
  DELETE_POST_FAIL,
  DELETE_POST_REQUEST,
  DELETE_POST_SUCCESS,
  GET_ALL_POSTS_FAIL,
  GET_ALL_POSTS_REQUEST,
  GET_ALL_POSTS_SUCCESS,
  GET_POST_FAIL,
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  UPDATE_POST_FAIL,
  UPDATE_POST_REQUEST,
  UPDATE_POST_SUCCESS,
} from "../constants/postConstants";
export const getAllPosts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_POSTS_REQUEST });
  try {
    const { data } = await axios.get(
      "https://my-blogs-api-a3b6138ba116.herokuapp.com/api/v1/posts"
    );
    dispatch({ type: GET_ALL_POSTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_ALL_POSTS_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const getPost = (postId) => async (dispatch) => {
  dispatch({ type: GET_POST_REQUEST, payload: postId });
  try {
    const { data } = await axios.get(
      `https://my-blogs-api-a3b6138ba116.herokuapp.com/api/v1/posts/${postId}`
    );
    dispatch({ type: GET_POST_SUCCESS, payload: data });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: GET_POST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const addPost = (post) => async (dispatch, getState) => {
  dispatch({ type: CREATE_POST_REQUEST, payload: post });
  const userInfo = getState().userSignin;
  try {
    await axios.post(
      "https://my-blogs-api-a3b6138ba116.herokuapp.com/api/v1/posts",
      post,
      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    dispatch({ type: CREATE_POST_SUCCESS });
  } catch (error) {
    dispatch({
      type: CREATE_POST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

export const updatePost = (post) => async (dispatch) => {
  dispatch({ type: UPDATE_POST_REQUEST, payload: post });
  try {
    await axios.put("https://my-blogs-api-a3b6138ba116.herokuapp.com/");
    dispatch({ type: UPDATE_POST_SUCCESS });
  } catch (error) {
    dispatch({
      type: UPDATE_POST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};
export const deletePost = (postId) => async (dispatch, getState) => {
  dispatch({ type: DELETE_POST_REQUEST, payload: postId });
  const userInfo = getState().userSignin;
  try {
    await axios.delete(
      `https://my-blogs-api-a3b6138ba116.herokuapp.com/api/v1/posts/${postId}`,

      {
        headers: {
          authorization: `Bearer ${userInfo?.userInfor?.token}`,
        },
      }
    );
    dispatch({ type: DELETE_POST_SUCCESS });
  } catch (error) {
    dispatch({
      type: DELETE_POST_FAIL,
      payload:
        error.response && error.response.data.msg
          ? error.response.data.msg
          : error.message,
    });
  }
};

import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

import * as api from '../api/index.js';


//All of these are Action Creators
//Redux thunk lets action functions use async and await. Required because fetching posts takes time
//sends data to reducer
export const getPosts = () => async (dispatch) => {
  try {
    //destructure response -> data
    const { data } = await api.fetchPosts();
    //action is dispatched not returned
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id); //returns the liked post

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id); //no return because we don't need the deleted post

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
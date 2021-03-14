import { combineReducers } from 'redux';

import posts from './posts';

//this is all reducers in the file, hence combine. Obtains reducers from /reducers/posts.js
export const reducers = combineReducers({ posts });
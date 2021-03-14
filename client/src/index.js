import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //lets you access state from anywhere in app, not just parent/children
import { createStore, applyMiddleware, compose } from 'redux'; //
import thunk from 'redux-thunk';

import { reducers } from './reducers';
import App from './App';
import './index.css';

//store is the entire state tree of application
const store = createStore(reducers, compose(applyMiddleware(thunk)));

//Redux is used to gather all front end api functions 
//For all redux function creations:
  //create api call in api.js : createPost = (newPost) => axios.post(url, newPost);
    //action call sometimes uses api call Ex. createPost action uses api POSTs request
  //define function in /actions/posts.js where all redux actions located:  export const createPost = () => ...
    //call dispatch({type: "TYPE"}) : dispatch({type: "CREATE", payload: data}); 
  //use dispatch(functionName(data)) wherever needed: dispatch(createPost(postData));
  //in reducers, define what that type does in the redux switch function : case "CREATE": return [...posts, action.payload]

ReactDOM.render(
  //everything in the provider uses the redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
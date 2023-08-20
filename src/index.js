import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'


// *** STORE ***
const storeInstance = createStore(
  combineReducers({
    feelings,
    understanding,
    support,
    comments,
  }),
  applyMiddleware(logger)
)


// *** REDUCERS ***
const feelings = (state = [], action) => {
  if (action.type === 'ADD_FEELINGS') {
    return [...state, action.payload]
  }
  return state
}
const understanding = (state = [], action) => {
  if (action.type === 'ADD_UNDERSTANDING') {
    return [...state, action.payload]
  }
  return state
}

const support = (state = [], action) => {
  if (action.type === 'ADD_SUPPORT') {
    return [...state, action.payload]
  }
  return state
}

const comments = (state = [], action) => {
  if (action.type === 'ADD_COMMENTS') {
    return [...state, action.payload]
  }
  return state
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);

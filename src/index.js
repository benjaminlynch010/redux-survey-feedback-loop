import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'


// *** REDUCERS ***
const newFeeling = (state = [], action) => {
  if (action.type === 'ADD_FEELING') {
    return [ action.payload ]
  }
  return state
}
const newUnderstanding = (state = [], action) => {
  if (action.type === 'ADD_UNDERSTANDING') {
    return [ action.payload ]
  }
  return state
}

const newSupport = (state = [], action) => {
  if (action.type === 'ADD_SUPPORT') {
    return [ action.payload ]
  }
  return state
}

const newComment = (state = [], action) => {
  if (action.type === 'ADD_COMMENT') {
    return [ action.payload ]
  }
  return state
}

// *** STORE ***
const storeInstance = createStore(
  combineReducers({
    newFeeling,
    newUnderstanding,
    newSupport,
    newComment,
  }),
  applyMiddleware(logger)
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <Provider store={storeInstance}>
        <App />
      </Provider>
    </React.StrictMode>
);

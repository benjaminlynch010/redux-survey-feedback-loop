import React from 'react';
import ReactDOM from 'react-dom/client';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import App from './components/App/App';

// Material UI Theme Setup
import theme from './theme'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Redux Setup
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'


// *** REDUCERS ***
const newFeeling = (state = '', action) => {
  if (action.type === 'ADD_FEELING') {
    console.log(action.payload)
    return action.payload;
  }
  return state;
}

const newUnderstanding = (state = '', action) => {
  if (action.type === 'ADD_UNDERSTANDING') {
    return action.payload;
  }
  return state;
}

const newSupport = (state = '', action) => {
  if (action.type === 'ADD_SUPPORT') {
    return action.payload;
  }
  return state;
}

const newComment = (state = '', action) => {
  if (action.type === 'ADD_COMMENT') {
    return action.payload;
  }
  return state;
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
        <ThemeProvider theme={theme}>
          <CssBaseline>
            <App />
          </CssBaseline>
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
);

export default theme

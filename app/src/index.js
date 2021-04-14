import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//Redux imports
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { reducer } from './reducers/index';
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(logger));

ReactDOM.render(
  <Provider store={store}>
    <App />,
  </Provider>,
  document.getElementById('root')
);
